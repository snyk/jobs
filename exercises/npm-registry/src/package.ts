import { RequestHandler } from 'express';
import got from 'got';
import { getLatestSemVer, isSemVerFilter } from './semver';
import { NPMPackage } from './types';

/*
  This in-memory Map is pretty dangerous:
    - NPMPackage size & count are unbounded so will very likely consume available ram and crash the container
    - not abiding by HTTP response cache headers, so updated NPM versions won't make it in here until the container restarts
    - not shared by containers, so huge waste in resources as each has to cache the same entities
    - new containers will create extra pressure on external resource (npm here) as the cache is empty, so a scaling event or redeploy means a stampeding herd :o

  But it's also a few lines :)

  Next steps would be an external in-line HTTP cache (eg Varnish). Could cluster it, serve stale responses if there's upstream issues, etc.

  Depending on data mutation needs, cache hit rate, response sizes, etc I'd then consider an external memory cache (eg Redis/Memcache) if needed, then a persistant data store.
*/
const npmCache: Map<string, NPMPackage> = new Map<string, NPMPackage>();

// METRIC histogram: req.package.client-time (from the client, be it UI or another backend service for a better overall view of latency)
export const getPackage: RequestHandler = async function (req, res, next) {
  const { name, version } = req.params;

  try {
    const body = await getPackageDetails({[name]: version});
    // METRIC histogram: req.package.transitive-dependencies (to track graph depth)
    // METRIC histogram: req.package.time {status: success}
    return res.status(200).json(body[0]);
  } catch (error) {
    // METRIC histogram: req.package.time {status: failure}
    // LOG: error message w/structured req name/version
    return next(error);
  }
};

async function getPackageDetails(deps: {[packageName: string]: string}): Promise<any[]> {
  return Promise.all(Object.keys(deps)
    .map(async name => {
      const npmPackage = await fetchNpmPackage(name);

      const requestedVersion = deps[name];
      const version = determineVersion(requestedVersion, npmPackage);
      const versionDef = npmPackage.versions[version];

      if (!versionDef) {
        // METRIC counter: req.package.version-not-found
        throw new Error(`Version '${version} not found for package ${name}`);
      }

      const dependencies = versionDef.dependencies;
      const transitiveDeps = dependencies ? await getPackageDetails(dependencies) : undefined;

      return { name, version, dependencies, transitiveDeps };
    }));
}

function determineVersion(requestedVersion: string, npmPackage: NPMPackage) {
  let version = requestedVersion;

  if (isSemVerFilter(requestedVersion)) {
    // METRIC counter: req.package.semver-filter
    const allVersions = Object.keys(npmPackage.versions);
    version = getLatestSemVer(requestedVersion, allVersions);
  }

  return version;
}

async function fetchNpmPackage(name: string): Promise<NPMPackage> {
  // METRIC counter: external.npm.cache.attempt
  let npmPackage = npmCache.get(name);

  if (npmPackage) {
    // METRIC counter: external.npm.cache.hit
    return npmPackage;
  }

  // Optimise: run a local nock server to speed up tests and/or wrap & stub the calls in-memory so we're not hitting NPM all the time, reduce test time, and enable more edge case testing.

  // METRIC counter: external.npm.cache.miss
  // METRIC histogram: external.npm.time.call (tag success & failure separately)
  // METRIC histogram: external.npm.time.deserialize (tag success & failure separately)
  npmPackage = await got(
    `https://registry.npmjs.org/${name}`
  ).json();

  if (!npmPackage) {
    // METRIC counter: external.npm.fetch {status: failure}
    throw new Error(`Error fetching or deserializing ${name} from NPM`);
  }

  // METRIC histogram: external.npm.cache.size.bytes (if bytes of npmPackage can be determined)
  npmCache.set(name, npmPackage);
  // METRIC histogram: external.npm.cache.size.count (npmCache.size())

  return npmPackage;
}

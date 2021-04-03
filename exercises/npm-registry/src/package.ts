import { RequestHandler } from 'express';
import got from 'got';
import { getLatestSemVer, isSemVerFilter } from './semver';
import { NPMPackage } from './types';

/**
 * Attempts to retrieve package data from the npm registry and return it
 */

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
      // METRIC histogram: external.npm (success & failure separately)
      // Optimise: in-memory Map, then an in-line HTTP cache (eg Varnish), then external memory cache (eg Redis/Memcache), then persisted dependending on data mutation needs, cache hit rate, response sizes, etc. Always respecting HTTP response cache headers from NPM to invalidate/update as needed.
      // Optimise: run a local nock server to speed up tests and/or wrap & stub the calls in-memory so we're not hitting NPM all the time, reduce test time, and enable more edge case testing.
      const npmPackage: NPMPackage = await got(
        `https://registry.npmjs.org/${name}`,
      ).json();

      const requestedVersion = deps[name];

      let version = requestedVersion;
      if (isSemVerFilter(requestedVersion)) {
        // METRIC counter: req.package.semver-filter
        const allVersions = Object.keys(npmPackage.versions);
        version = getLatestSemVer(requestedVersion, allVersions);
      }

      const dependencies = npmPackage.versions[version].dependencies;
      const transitiveDeps = dependencies ? await getPackageDetails(dependencies) : undefined;

      return { name, version, dependencies, transitiveDeps };
    }));
}

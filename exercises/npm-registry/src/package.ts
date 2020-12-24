import { RequestHandler } from 'express';
import got from 'got';
import { NPMPackage, Dependency } from './types';
import { versionParser } from  './tools/versions';

/**
 * Attempts to retrieve package data from the npm registry and return it
 */
export const getPackage: RequestHandler = async function (req, res, next) {
  const { name, version } = req.params;

  try {
    const dependencies = await getPackagesRecursively(name, version);
    return res.status(200).json({
      name: name,
      version: version,
      dependencies: dependencies,
    });
  } catch (error) {
    return next(error);
  }
};


async function getPackagesRecursively(name, version) {
/**
 * The function calls itself recursively until it has reached the "bottom dependency".
 * At which point, we return the entire dependency branch.
 * Be careful: each cycle makes a network call
 * and creates new cycles based on the list of packages found.
 * @param  {string} name    - Name of the NPM package
 * @param  {string} version - Desired version of the NPM package
 * @return {Array.<Dependency>} A list of dependencies
 */
  try {
    const npmPackage: NPMPackage = await got(
      `https://registry.npmjs.org/${name}`,
    ).json();

    const dependencies = npmPackage.versions[version].dependencies;
    let formattedDependencies = new Array();

    if (dependencies !== undefined && Object.keys(dependencies).length > 0) {
      for (let depName in dependencies) {
        const depVersion = versionParser(dependencies[depName]),
         subDependencies = await getPackagesRecursively(depName, depVersion);

        const dependency: Dependency = {
          name: depName,
          version: depVersion,
          dependencies: subDependencies,
        };

        formattedDependencies.push(dependency);
      }
    }

    return formattedDependencies;
  } catch(error) {
    return error;
  }
}

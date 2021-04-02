import { RequestHandler } from 'express';
import got from 'got';
import { NPMPackage } from './types';

/**
 * Attempts to retrieve package data from the npm registry and return it
 */
export const getPackage: RequestHandler = async function (req, res, next) {
  const { name, version } = req.params;

  try {
    const body = await getPackageDetails({[name]: version});
    return res.status(200).json(body[0]);
  } catch (error) {
    return next(error);
  }
};

async function getPackageDetails(deps: {[packageName: string]: string}): Promise<any[]> {
  return Promise.all(Object.keys(deps)
    .map(async name => {
      const version = deps[name].replace('^', '');

      const npmPackage: NPMPackage = await got(
        `https://registry.npmjs.org/${name}`,
      ).json();

      const dependencies = npmPackage.versions[version].dependencies;
      const transitiveDeps = dependencies ? await getPackageDetails(dependencies) : undefined;

      return { name, version, dependencies, transitiveDeps };
    }));
}

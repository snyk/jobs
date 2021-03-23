import { RequestHandler } from "express";
import got from "got";
import { minSatisfying } from "semver";
import { NPMPackage } from "./types";

/**
 * Attempts to retrieve package data from the npm registry and return it
 */
export const getPackage: RequestHandler = async function (req, res, next) {
  const { name, version } = req.params;
  const dependencyTree = {};
  try {
    const npmPackage: NPMPackage = await got(
      `https://registry.npmjs.org/${name}`
    ).json();

    const dependencies = npmPackage.versions[version].dependencies;

    for (const [dep, version] of Object.entries(dependencies as Object)) {
      const subDep = await getDependencies(dep, version);
      dependencyTree[dep] = { version, dependecies: subDep };
    }

    return res
      .status(200)
      .json({ name, version, dependencies: dependencyTree });
  } catch (error) {
    return next(error);
  }
};

async function getDependencies(name, version) {
  return got(`https://registry.npmjs.org/${name}`)
    .json()
    .then((npmPackage: any) => {
      let v = minSatisfying(Object.keys(npmPackage.versions), version);

      if (v) {
        const dependencyTree = {};
        const newDeps = npmPackage.versions[v].dependencies;
        for (const [dep, version] of Object.entries(
          newDeps || ({} as Object)
        )) {
          const subDep = getDependencies(dep, version);
          dependencyTree[dep] = { version, dependecies: subDep };
        }

        return dependencyTree;
      } else {
        return {};
      }
    });
}

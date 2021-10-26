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
      `https://registry.npmjs.org/${name}`//good to be a constant
    ).json();

    const dependencies = npmPackage.versions[version].dependencies;

    for (const [dep, version] of Object.entries(dependencies as Object)) {
      const subDep = await getDependencies(dep, version);// recursion inside a loop
      // without a hard coded depth
      // , or at least a logic where to stop drilling down is dangerous  may be tail-recursion optimization
      // where minimum changes to the call stack are made -
      dependencyTree[dep] = { version, dependencies: subDep };
    }

    return res
      .status(200)
      .json({ name, version, dependencies: dependencyTree });
  } catch (error) {
    return next(error);
  }
};

async function getDependencies(name, version) {
  const isNPMPackage = (value: unknown): value is NPMPackage => typeof value === 'object';
  return  await got(`https://registry.npmjs.org/${name}`)
    .json()
    .then((npmPackage: NPMPackage|any) => {//not ideal but NPMPackage type would error in Typescript
      // 'Type 'unknown' is not assignable to type NPMPackage' we can change the ts config to not use strict check ,
      // but it is not recommended, so check the api documentation to see what the return type is
      // the return type is unknown , so we can do it some type guards
      // by type assertion to make our intentions explicit
      if (isNPMPackage(npmPackage)) {
        let v = minSatisfying(Object.keys(npmPackage.versions), version);

        if (v) {
          const dependencyTree = {};
          const newDeps = npmPackage.versions[v].dependencies;
          for (const [dep, version] of Object.entries(
              newDeps || ({} as Object)
          )) {
            const subDep = getDependencies(dep, version);
            dependencyTree[dep] = {version, dependencies: subDep};
          }

          return dependencyTree; // maybe is a good idea to make the dependencyTree a custom structure
          // as we already know how the tree would look like
        } else {
          return {};
        }
      }
    });
}

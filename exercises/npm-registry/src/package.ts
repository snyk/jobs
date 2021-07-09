import { RequestHandler } from "express";
import got from "got";
import { NPMPackage } from "./types";

/**
 * Attempts to retrieve package data from the npm registry and return it
 */
export const getPackage: RequestHandler = async function (req, res, next) {
  const { name } = req.params;

  try {
    const npmPackage: NPMPackage = await got(
      `https://registry.npmjs.org/${name}`
    ).json();

    const version =
      req.params.version === "latest"
        ? npmPackage["dist-tags"].latest
        : req.params.version;

    const dependencies = npmPackage.versions[version].dependencies;

    return res.status(200).json({ name, version, dependencies });
  } catch (error) {
    return next(error);
  }
};

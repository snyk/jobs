import { coerce, valid } from "semver";

export { resolveVersion };

function resolveVersion(version: string): string | null {
  const sanitisedVersion = version.startsWith("v") ? version.slice(1) : version;

  if (isNaN(Number(sanitisedVersion.split(".")[0]))) {
    return null;
  }

  const coercedVersion = coerce(sanitisedVersion);

  return coercedVersion ? valid(coercedVersion) : null;
}

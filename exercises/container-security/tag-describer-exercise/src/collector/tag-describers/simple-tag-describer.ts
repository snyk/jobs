import { getSimilarFlavours } from "./flavours";
import { SkippedTag, TagDescription } from "./types";
import { resolveVersion } from "./versions";

function simpleTagDescriber(tag: string): TagDescription | SkippedTag {
  const splitTag = tag.split("-");
  const version = splitTag.shift()!;
  const resolvedVersion = resolveVersion(version);

  if (!resolvedVersion) {
    return { skip: true };
  }

  const flavour = splitTag.length ? splitTag.join("-") : undefined;
  const similarFlavours = flavour ? getSimilarFlavours(flavour) : [];

  return {
    version,
    flavour,
    resolvedVersion,
    similarFlavours,
  };
}

export { simpleTagDescriber };

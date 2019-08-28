interface TagDescription {
  flavour?: string;
  version: string;
  resolvedVersion: string;
  similarFlavours: string[];
}

interface SkippedTag {
  skip: true;
}

function skipTag(
  tagDescription: TagDescription | SkippedTag,
): tagDescription is SkippedTag {
  return (tagDescription as SkippedTag).skip;
}

type TagDescriber = (tag: string) => TagDescription | SkippedTag;

export { skipTag, SkippedTag, TagDescriber, TagDescription };

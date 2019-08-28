
import { node } from "./official/node";
import { centos } from "./official/centos";
import { simpleTagDescriber } from "./simple-tag-describer";
import { SkippedTag, TagDescriber, TagDescription } from "./types";

export { describeTag };

const tagDescribers: {
  [repo: string]: TagDescriber;
} = {
  node,
  centos,
};

function describeTag(repo: string, tag: string): TagDescription | SkippedTag {
  const tagDescriber = tagDescribers[repo];

  if (tagDescriber) {
    return tagDescriber(tag);
  } else {
    return simpleTagDescriber(tag);
  }
}
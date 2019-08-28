import { simpleTagDescriber } from "../simple-tag-describer";
import { SkippedTag, TagDescription } from "../types";

function node(tag: string): TagDescription | SkippedTag {
  const splitTag = tag.split("-");

  // The chakracore images are different because "reasons"
  // https://github.com/nodejs/docker-node/issues/856
  if (splitTag[0] === "chakracore" && splitTag.length === 2) {
    tag = splitTag.reverse().join("-");
  }

  return simpleTagDescriber(tag);
}

export { node };
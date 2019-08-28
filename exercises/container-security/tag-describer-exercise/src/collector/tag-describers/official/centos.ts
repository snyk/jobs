import { simpleTagDescriber } from "../simple-tag-describer";
import { SkippedTag, TagDescription } from "../types";

// CentOS tags, frustratingly contain the word 'centos' in them i.e.
// 'centos:centos7'. This is completely bizarre, but oh well.
function removeCentosPrefix(tag: string): string {
  return tag.startsWith("centos") ? tag.slice(6) : tag;
}

function centos(tag: string): TagDescription | SkippedTag {
  const sanitisedTag = removeCentosPrefix(tag);

  return simpleTagDescriber(sanitisedTag);
}

export { centos };

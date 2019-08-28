import {
  SkippedTag,
  TagDescription,
} from "../../../src/collector/tag-describers/types";

interface TagFixture {
  tag: string;
  fixture: TagDescription | SkippedTag;
}

export { TagFixture };
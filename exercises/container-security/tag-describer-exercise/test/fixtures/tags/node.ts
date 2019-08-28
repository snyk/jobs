import { TagFixture } from "./types";

const node: TagFixture[] = [
  {
    tag: "6",
    fixture: {
      similarFlavours: [],
      version: "6",
      resolvedVersion: "6.0.0",
    },
  },
  {
    tag: "8.12",
    fixture: {
      similarFlavours: [],
      version: "8.12",
      resolvedVersion: "8.12.0",
    },
  },
  {
    tag: "jessie",
    fixture: {
      skip: true,
    },
  },
  {
    tag: "8.12.0-jessie",
    fixture: {
      flavour: "jessie",
      similarFlavours: ["stretch", "buster", "bullseye", "bookworm"],
      version: "8.12.0",
      resolvedVersion: "8.12.0",
    },
  },
  {
    tag: "carbon-stretch",
    fixture: {
      skip: true,
    },
  },
  {
    tag: "chakracore-8",
    fixture: {
      flavour: "chakracore",
      similarFlavours: [],
      version: "8",
      resolvedVersion: "8.0.0",
    },
  },
  {
    tag: "chakracore",
    fixture: {
      skip: true,
    },
  },
  {
    tag: "latest",
    fixture: {
      skip: true,
    },
  },
  {
    tag: "carbon",
    fixture: {
      skip: true,
    },
  },
  {
    tag: "boron-jessie",
    fixture: {
      skip: true,
    },
  },
];

export { node };

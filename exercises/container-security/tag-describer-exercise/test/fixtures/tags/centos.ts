import { TagFixture } from "./types";

const centos: TagFixture[] = [
  {
    tag: "latest",
    fixture: {
      skip: true,
    },
  },
  {
    tag: "centos6",
    fixture: {
      resolvedVersion: "6.0.0",
      similarFlavours: [],
      version: "6",
    },
  },
  {
    tag: "centos7.0.1406",
    fixture: {
      resolvedVersion: "7.0.1406",
      similarFlavours: [],
      version: "7.0.1406",
    },
  },
  {
    tag: "6.9",
    fixture: {
      resolvedVersion: "6.9.0",
      similarFlavours: [],
      version: "6.9",
    },
  },
];

export { centos };

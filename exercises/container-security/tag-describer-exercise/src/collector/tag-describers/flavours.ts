import { coerce } from "semver";

export { getSimilarFlavours, getDebianVersion, isDebianVersion };

// All flavours *must* be in order of release (oldest -> latest)

const debianFlavours = [
  "squeeze",
  "wheezy",
  "jessie",
  "stretch",
  "buster",
  "bullseye",
  "bookworm",
];

const ubuntuFlavours = [
  "trusty",
  "xenial",
  "yakkety",
  "zesty",
  "artful",
  "bionic",
  "cosmic",
  "disco",
];

const alpineFlavours = [
  "alpine3.1",
  "alpine3.2",
  "alpine3.3",
  "alpine3.4",
  "alpine3.5",
  "alpine3.6",
  "alpine3.7",
  "alpine3.8",
  "alpine3.9",
];

const windowsNanoserverFlavours = [
  "nanoserver-sac2016",
  "nanoserver-1709",
  "nanoserver-1803",
  "nanoserver-1809",
];

const windowsServerCoreFlavours = [
  "windowsservercore-ltsc2016",
  "windowsservercore-1709",
  "windowsservercore-1803",
  "windowsservercore-1809",
];

const commonFlavourLists = [
  alpineFlavours,
  debianFlavours,
  ubuntuFlavours,
  windowsNanoserverFlavours,
  windowsServerCoreFlavours,
];

function isDebianVersion(releaseName: string) {
  return debianFlavours.includes(releaseName);
}

function getDebianVersion(releaseName: string) {
  if (!isDebianVersion(releaseName)) {
    throw new Error(`${releaseName} is not a valid Debian version`);
  }

  const versionIndex = debianFlavours.indexOf(releaseName);
  // debianFlavours list starts with "squeeze", which is 6.0
  const version = (versionIndex + 6).toString(10);

  return coerce(version)!.toString();
}

function getSimilarFlavours(flavour: string) {
  for (const flavourList of commonFlavourLists) {
    for (let i = 0; i < flavourList.length; i++) {
      const potentialFlavour = flavourList[i];
      const similarFlavours = flavourList.slice(i + 1);

      if (flavour === potentialFlavour) {
        return similarFlavours;
      }

      if (flavour.includes(potentialFlavour)) {
        // Get any content around the flavour i.e. 'jessie' might be used as
        // part of 'jessie-slim'
        const matcher = RegExp(
          `([a-zA-Z0-9_.-]*)${potentialFlavour}([a-zA-Z0-9_.-]*)`,
        );
        const extras = matcher.exec(flavour) as string[];

        return similarFlavours.map((flav) => `${extras[1]}${flav}${extras[2]}`);
      }
    }
  }

  return [];
}

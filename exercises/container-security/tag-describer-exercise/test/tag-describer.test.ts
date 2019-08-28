import { readdirSync } from "fs";
import { resolve } from "path";
import { valid } from "semver";
import { repositories } from "../src/collector/repositories";
import { describeTag } from "../src/collector/tag-describers";
import {
  getDebianVersion,
  getSimilarFlavours,
} from "../src/collector/tag-describers/flavours";
import { skipTag } from "../src/collector/tag-describers/types";
import { resolveVersion } from "../src/collector/tag-describers/versions";
import { tagDescriberSpecs } from "./fixtures/tags";

describe("repositories list", () => {
  // Small sanity check to ensure that repositories is populated, as the rest of the
  // tests here iterate over it
  test("has some entries", () => {
    expect(repositories).toBeInstanceOf(Array);
    expect(repositories).not.toHaveLength(0);
  });

  test("all custom describers are in the repository list", () => {
    const path = resolve("./src/collector/tag-describers");

    const describers = readdirSync(path, { withFileTypes: true })
      .filter((file) => file.isDirectory())
      .map((dir) => {
        const { name } = dir;
        const files = readdirSync(resolve(path, name));

        return files.map((file) => {
          const describer = file.slice(0, -3);
          return name === "official" ? describer : `${name}/${describer}`;
        });
      })
      .reduce((acc, describerDir) => {
        acc.push(...describerDir);
        return acc;
      }, []);

    expect(repositories).toEqual(expect.arrayContaining(describers));
  });
});

repositories.forEach((repository) => {
  describe(`${repository} tag describer`, () => {
    const specs = tagDescriberSpecs[repository];

    specs.forEach((spec) => {
      describe(`${spec.tag}`, () => {
        let tagDescription;

        beforeAll(() => {
          tagDescription = describeTag(repository, spec.tag);
        });

        if (skipTag(spec.fixture)) {
          test("should be skipped", () => {
            expect(tagDescription.skip).toBe(spec.fixture.skip);
          });
        } else {
          test(`has the correct version (${spec.fixture.version})`, () => {
            expect(tagDescription.version).not.toBeNull();
            expect(tagDescription.version).toBe(spec.fixture.version);
          });

          test(`resolves the version to a usable semver value (${spec.fixture.resolvedVersion})`, () => {
            expect(valid(tagDescription.resolvedVersion)).not.toBeNull();
            expect(tagDescription.resolvedVersion).toBe(
              spec.fixture.resolvedVersion,
            );
          });

          test("has the correct flavour", () => {
            expect(tagDescription.flavour).toBe(spec.fixture.flavour);
          });

          test("has similar flavours", () => {
            expect(tagDescription.similarFlavours).toEqual(
              spec.fixture.similarFlavours,
            );
          });
        }
      });
    });
  });
});

describe("utils", () => {
  test("getDebianVersion", () => {
    expect(getDebianVersion("jessie")).toBe("8.0.0");
    expect(getDebianVersion("bookworm")).toBe("12.0.0");
    expect(() => getDebianVersion("or")).toThrow();
  });

  describe("getSimilarFlavours", () => {
    test("returns an empty list when there are no similar flavours", () => {
      expect(getSimilarFlavours("karni")).toEqual([]);
      expect(getSimilarFlavours("dar")).toEqual([]);
      expect(getSimilarFlavours("liron")).toEqual([]);
    });

    test("returns ubuntu flavours later than the current one", () => {
      const similarFlavours = getSimilarFlavours("zesty");

      expect(similarFlavours).toContain("artful");
      expect(similarFlavours).toContain("bionic");
      expect(similarFlavours).not.toContain("xenial");
    });

    test("only suggests flavours from the correct flavour list", () => {
      expect(getSimilarFlavours("trusty")).not.toContain([
        "buster",
        "alpine3.8",
        "windowsservercore-1803",
      ]);
    });
  });

  describe("resolveVersion", () => {
    test("detects a named version", () => {
      expect(resolveVersion("latest")).toBeNull();
    });

    // This is significant because some tags contain numeric information for
    // versions of secondary software in the image; for example, "jre11" is a
    // tag for a "tomcat" image, and has no reference to the version of
    // tomcat, so we need to correctly identify this.
    test("detects a named version, even with other numeric info", () => {
      expect(resolveVersion("jre11")).toBeNull();
    });

    test("detects that a usable version is provided", () => {
      expect(resolveVersion("1")).toBe("1.0.0");
    });
  });
});

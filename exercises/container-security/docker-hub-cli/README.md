# Docker Hub CLI exercise

CLI to use Docker API with Docker Hub registry.


## Prerequisites

Node 6 or above.

## Usage

Clone the repo locally.
Run `npm install`.

To find out the available arguments, type the following command from the root of the directory `Docker-Hub-CLI`:

```bash
node cli/index.js --help
```

To get the Digest of an image, a tag of a public repo on Docker Hub, provide the repo name and the tag name:

```bash
node cli/index.js --getDigest --repo=<repoName> --tag=<tagName>
```

## The task

Implement a similar functionality to the current `getDigest` functionality, named `getTags`.
Using the CLI with `getTags` and a repo name should return a list of tags of the given repo name.

## Notes
 - Think of how to deal with a repo with a large number of tags
 - Run tests by running the command `npm run test`
 - Consider implementing tests
 - Feel free to refactor existing code as needed without breaking existing functionality
 - Consider pushing multiple commits to represent your work

## Docs and references
 - Docker Hub repositories and tags hierarchy https://docs.docker.com/docker-hub/repos/
 - Docker Registry HTTP API V2 https://docs.docker.com/registry/spec/api
 - Jest testing framework docs https://jestjs.io/docs/en/getting-started

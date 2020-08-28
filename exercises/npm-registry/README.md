# Exercise

NodeJS has a managed packages environment called `npm`. A package is a
functional NodeJS module with versioning, documentation, dependencies (in the
form of other packages), and more.

This repository contains a basic NodeJS server with a `/package` endpoint. When
passed a package name and version, the endpoint returns the dependencies of that
package.

## Task

1. Update the `/package` endpoint, so that it returns all of the transitive
   dependencies for a package, not only the first order dependencies

2. Present these dependencies in a tree view

## Getting Started

To install dependencies and start the server in dev mode:

```sh
npm ci
npm start
```

Then we can try the `/package` endpoint. Here is an example that uses `curl` and
`jq`, but feel free to use any client.

```sh
curl -s http://localhost:3000/package/react/16.13.0 | jq .
```

Most of the code is boilerplate; the logic for the `/package` endpoint can be
found in [src/package.ts](src/package.ts), and some basic tests in
[test/package.test.ts](test/package.test.ts)

You can run the tests with

```sh
npm run test

# Or in watch mode
npm run test -- --watch
```

Good luck, and enjoy!

## Things to consider

- Look at the inner "dependencies" object of a package for analysis of
  first-order dependencies.

- npm returns dependency ranges that follow the
  [Semantic Versioning](https://semver.org/) specification, which you'll need to
  account for.

- The packages update from time to time, just as their dependencies do.

- What makes a good web service? API, performance, data storage, low latency,
  scalability, monitoring, you name it :)

- Consider the quality and structure of your codebase; is it maintainable?

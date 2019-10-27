### Background

NodeJS has a managed packages environment called npm. A package is a functional NodeJS module with versioning, documentation, dependencies (in the form of other packages), and more. npm is being constantly updated with new packages and new versions of existing packages.

In order to identify vulnerabilities in certain packages, the following (rough) process takes place:

  1. User provides name of package for analysis
  2. We fetch the overall set of dependencies for a given package
  3. We compare the set of dependencies with a managed set of vulnerable packages
  4. We identify remediation paths (upgrades and/or patches for vulnerable packages)
  5. Users choose their preferred remediation action and we apply it

### Exercise

In this exercise we will focus on on stages 1 and 2 for a package that is already published on npmjs.com

Your task is to update the application we've included. Currently when given a name of an npm package it returns the dependent packages to be used by the consequent stage (3).

* Update the `/package` endpoint to _also_ return transitive dependencies (recursively).
* Optional. Introduce a UI for displaying this.
* Optional. Introduce a form for collecting user input

You can obtain package data through the npm registry: `https://registry.npmjs.org/<package_name>/<version_or_tag>`. For example: https://registry.npmjs.org/express/latest or https://registry.npmjs.org/async/2.0.1

#### Getting Started

This repo provides the starting point for our [NodeJs](https://nodejs.org/) application. Once you've got the files locally in the terminal line you can run the following two commands to download the project dependencies and start the server.

```
npm install
npm start
```

Once running you will be able to access the service at [http://localhost:3000](http://localhost:3000).

For development purposes you can run with `npm run dev`, this runs the service through [Nodemon](https://nodemon.io/),
so if any changes are made to files within the directory the Express service will be reloaded automatically.

You can run `npm run test` to verify the application functions as expected.

Good luck, and enjoy!

#### Things to consider

  * Look at the inner "dependencies" object for analysis of first-order dependencies.
  * There are currently over 370K packages on npmjs.com, and the number is growing all the time.
  * The packages update from time to time, just as their dependencies.
  * What makes a good web service? API, architecture, data storage, low latency, scalability, monitoring, you name it :)

#### Implementation

  1. A working web application that, given a name of an npm published package, returns the set of dependencies for said package.
  2. Present the dependencies in a tree view.
  3. Account of asyncronous fetching of dependencies as you see fit.
  4. Cache relevant data so that repeated requests resolve with minimum latency.

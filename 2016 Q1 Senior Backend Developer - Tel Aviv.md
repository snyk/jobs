## Senior Backend Developer - Tel Aviv

We are looking for a talented developer with a backend focus.

You will be working on our vulnerabilities monitoring service, connecting user projects, the npm registry and our vulnerabilities database.

You will apply scalable design, build clear APIs and add an occasional front-end feature. You will develop in NodeJS, python, groovy and other stacks. You will combine SQL and graph databases. Focus on maintainable and testable code is important as you will be setting the tone for quality in our codebase.

#### The interesting part

Now I'd like to publicly begin the interview process, and present the first question we want to discuss.
If the exercise below makes your neurons spark with ideas, we want to hear from you at jobs@snyk.io :)

*Background*

NodeJS has a managed packages environment called npm. A package is a functional NodeJS module with versioning, documentation, dependencies (in the form of other packages), and more. npm is being constantly updated with new packages and new versions of existing packages.

In order to identify vulnerabilities in certain packages, the following (rough) process takes place:

  1. User provides name of package for analysis
  2. We fetch the overall set of dependencies of given package
  3. We compare the set of dependencies with a managed set of vulnerable packages
  4. We identify remediation paths (upgrades and/or patches for vulnerable packages)
  5. Users choose their preferred remediation action and we apply it

*Exercise*

In this exercise we will focus on on stages 1 and 2 for named dependencies alone. That is, disregard versions of dependent packages.

Your task is to design a web service that, given a name of an npm package, returns its dependent packages to be used by the consequent stage (3).

Things to consider:

  1. Obtain package data by a GET request such as: https://registry.npmjs.org/package_name/latest?json=true
  2. Look at the inner "dependencies" object for analysis of first-order dependencies.
  3. There are currently over 260K packages on npmjs.com, and the number is growing all the time.
  4. The packages update from time to time, just as their dependencies... What does this mean for you?
  5. What makes a good web service? API, architecture, data storage, low latency, scalability, monitoring, you name it :)
  
Waiting to hear from you :)

[Snyk.io](https://snyk.io)

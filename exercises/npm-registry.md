*Exercise*

In this exercise we will focus on on stages 1 and 2 for named dependencies alone. That is, disregard versions of dependent packages.

Your task is to design a web service that, given a name of an npm package, returns its dependent packages to be used by the consequent stage (3).

Things to consider:

  1. Obtain package data by a GET request such as: https://registry.npmjs.org/package_name/latest?json=true
  2. Look at the inner "dependencies" object for analysis of first-order dependencies.
  3. There are currently over 260K packages on npmjs.com, and the number is growing all the time.
  4. The packages update from time to time, just as their dependencies... What does this mean for you?
  5. What makes a good web service? API, architecture, data storage, low latency, scalability, monitoring, you name it :)

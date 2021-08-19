# Front End Exercise

An exercise which starts with a simple codebase which renders a dependency tree using Handlebars for templates and Sass for styling.

## Running locally

Install dependencies:
```
npm ci
```

Run the application in a mode which will watch for file changes, and refresh the browser automatically when files are changed:
```
npm run dev
```

Or alternatively, to run in "production" mode:
```
npm build
npm start
```

You can now visit http://localhost:3001 to view it.

## Tests

To run linting run:
```
npm test
```

## Exercise

### Task 1

This server only renders the first level of dependencies (`depTree.dependencies`). However if you look at the fixture data at `fixtures/depTree.fixture.js` you will notice that several of the dependencies have nested dependencies themselves.

Modify the Handlebars templates so that all levels of dependencies are rendered. 

#### Additional notes:

To help speed you up, the files at `views/dependencies.hbs` and `views/partials/dependency-tree.hbs` will both be relevant to this task.

### Task 2

You may notice that each of the dependencies appear clickable, and there is a `[-]` icon on the right side of each one. The child dependencies of the clicked dependency should toggle visibility whenever this is clicked (hide on first click, and show again when clicked for a second time). The icon should change from a `[-]` to a `[+]` whenever the child dependencies are hidden.


Example:
```
express@4.17.1             [-]
 |- accepts@1.3.7          [-]
 |   |- mime-types@2.1.31  [-]
 |   |  └- mime-db@1.48.0
 |   └- negotiator@0.6.2
 |- array-flatten@1.1.1
 |- ...
 ```

#### Additional notes:

We would really like you to accomplish this task using JavaScript. You might think of a way to achieve this task using without JavaScript (only using HTML & CSS), and that'd be a great thing to discuss during your next interview, however please refrain from a pure HTML/CSS solution, as we would like to see your JavaScript skills.

Feel free to make a JavaScript file within the `/public` directory, which will expose the file at `http://localhost:3001/path/to/file.js`.

It'd be great to see you working with Vanilla JS for this task (no frameworks) so that we can get an understanding of your pure JavaScript skills. If you find it easier to work with a framework, please use it as little as possible, so we can see your JavaScript skills.

Although this task is focused on a JS solution, we would also like to see you write some CSS/Sass. Please make the relevant changes in `src/stylesheets/partials/dependency-tree.scss` in order to display the closed state with a `[+]` symbol to the right instead of a `[-]`.

### Task 3

Introduce some tests. Add at least one test. You can again choose any framework / test runner you like, and we are happy with either unit tests or integration / E2E tests.

#### Additional notes:

If you get to this point and you've already been writing tests as you go along, you can pat yourself on the back!

### Task 4 - Bonus task (if you get time)

The dependency tree currently loads from a fixture file at `fixtures/depTree.fixture.js`.

Run the server found at `exercises/npm-registry`
```bash
cd exercises/npm-registry
npm ci
npm start
```
Use the JSON response from this server at `http://localhost:3000/package/{packageName}/latest` (e.g. http://localhost:3000/package/express/latest) to populate the DependenciesTree instead of using the fixture file.

#### Additional notes:

Handlebars expects the data to be in a different shape, so some transformation will be needed.


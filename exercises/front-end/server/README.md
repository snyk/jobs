# Front End Exercise

An exercise which starts with a simple codebase which renders a dependency tree using Handlebars for templates and Sass for styling.

## Running locally

Install dependencies:
```
npm ci
```

Run the application in a mode which will watch for file changes:
```
npm run watch
```

Or alternatively, to run in "production" mode:
```
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

### Task 2

You may notice that each of the dependencies appear clickable, and there is a `-` icon on the right side of each one. The child dependencies of the clicked dependency should toggle visibility whenever this is clicked (hide on first click, and show again when clicked for a second time).

You may well want to introduce Javascript in order to apply this behaviour. Feel free to make a Javascript file within the `public directory`, which will expose the file at `http://localhost:3001/path/to/file.js`. Feel free to use whatever framework you are most comfortable with. We are more interested in seeing how you approach the task than evaluating your knowledge of a specific framework. Vanilla Javascript is also fine.

### Task 3

Introduce some tests. Add at least one test. You can again choose any framework / test runner you like, and we are happy with either unit tests or integration / E2E tests.

### Task 4 - Bonus task (if you get time)

The dependency tree currently loads from a fixture file at `fixtures/depTree.fixture.js`.

Run the server found at `exercises/npm-registry`
```bash
cd exercises/npm-registry
npm ci
npm start
```
Use the JSON response from this server at `http://localhost:3000/package/{packageName}/latest` (e.g. http://localhost:3000/package/express/latest) to populate the DependenciesTree instead of using the fixture file.

Note that Handlebars expects the data to be in a different shape, so some transformation will be needed.


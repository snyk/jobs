# front-end

A simple UI for displaying a depenency tree

## Running locally

Install dependencies:
```
npm ci
```

Start the application:
```
npm run serve
```

You can now visit http://localhost:8080 to view it.

## Tests

To run linting & tests run:
```
npm test
```

## Storybook

To view the available Vue components, you can run Storybook (documentation / design system):
```
npm run storybook
```

## Exercise

### Task 1

The dependency tree currently loads from a fixture file at `exercises/src/components/DependenciesTree/depGraph.fixture.js`.

Run the server found at `exercises/npm-registry`
```bash
cd exercises/npm-registry
npm ci
npm start
```
Use the JSON response from this server at `http://localhost:3000/package/{packageName}/latest` (e.g. http://localhost:3000/package/express/latest) to populate the DependenciesTree instead of using the fixture file.

### Task 2

Allow people to type in a package name (and optionally a version number) in order to display the dependency tree of a different package.

### Task 3 - Bonus task (if you get time)

The server at `exercises/npm-registry` only returns top level dependencies. Render the full tree by making subsequent calls to this endpoint for the transitive dependencies.

module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testMatch: ['**/*.test.{j,t}s?(x)'],
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
};

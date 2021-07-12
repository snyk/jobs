module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testMatch: ['**/*.test.{j,t}s?(x)'],
  moduleFileExtensions: ['js', 'ts', 'json', 'vue', 'scss'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
    '^icons/(.*)$': '<rootDir>/node_modules/vue-material-design-icons/$1',
  },
  transformIgnorePatterns: ['node_modules/(?!(vue-material-design-icons)/)'],
  setupFilesAfterEnv: ['./jest.setup.js'],
};

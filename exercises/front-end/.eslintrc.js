module.exports = {
  root: true,

  env: {
    node: true,
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },

  plugins: ['jest'],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },

  overrides: [
    {
      files: ['**/*.test.{j,t}s?(x)', 'jest.setup.js'],
      env: {
        jest: true,
      },
    },
  ],

  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/prettier',
    '@vue/typescript',
  ],
};

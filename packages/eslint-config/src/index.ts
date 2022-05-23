import type eslint from 'eslint';

const config: eslint.Linter.Config = {
  env: {
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    require.resolve('./base.js'),
    require.resolve('./import.js'),
    require.resolve('./typescript.js'),
    require.resolve('./jest.js'),
    'plugin:prettier/recommended',
  ],
  globals: {
    [`__DEV__`]: 'readonly',
    [`__PROD__`]: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  reportUnusedDisableDirectives: true,
  rules: {},
};

export default config;

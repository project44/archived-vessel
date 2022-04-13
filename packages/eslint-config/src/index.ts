import { ECMA_VERSION } from '@vessel/constants';
import type eslint from 'eslint';

const config: eslint.Linter.Config = {
  env: {
    [`es${ECMA_VERSION}`]: true,
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
    ecmaVersion: ECMA_VERSION,
    sourceType: 'module',
  },
  reportUnusedDisableDirectives: true,
  rules: {},
};

export default config;

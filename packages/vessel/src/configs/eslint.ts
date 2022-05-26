import { ESLintConfig } from '@beemo/driver-eslint';

const config = {
  extends: ['@manifest-ui/eslint-config'],
  ignore: [
    'build/',
    'coverage/',
    'node_modules/',
    'public/',
    'esm/',
    'lib/',
    'tmp/',
    'dist/',
    '*.d.ts',
    '*.min.js',
    '*.map',
    '*.snap',
  ],
  root: true,
};

export default config as ESLintConfig;

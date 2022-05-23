import { ESLintConfig } from '@beemo/driver-eslint';

const { tool } = process.beemo;
const { react } = tool.config.settings;

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

if (react) {
  config.extends.push('@manifest-ui/eslint-config/react');
}

export default config as ESLintConfig;

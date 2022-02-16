import path from 'path';

export const ROOT = process.env.BEEMO_ROOT ?? process.cwd();
export const PACKAGE_JSON_PATH = path.join(ROOT, 'package.json');
export const TSCONFIG_JSON_PATH = path.join(ROOT, 'tsconfig.json');

// Library constants
export const DIR_PATTERN = '{bin,scripts,src,tests}';
export const EXT_PATTERN = '{ts,tsx,js,jsx}';
export const IGNORE_PATHS = [
  'build/',
  'coverage/',
  'node_modules/',
  'public/',
  'esm/',
  'lib/',
  'tmp/',
  'dist/',
  '*.d.ts',
];
export const ECMA_VERSION = 2020;
export const MIN_IE_VERSION = 11;
export const MIN_NODE_VERSION = '16.13.2';

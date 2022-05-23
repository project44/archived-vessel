import { PrettierConfig } from '@beemo/driver-prettier';

const config: PrettierConfig = {
  ...(require('@manifest-ui/prettier-config') as PrettierConfig),
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
    'CHANGELOG.md',
    'lerna.json',
    'package.json',
    'tsconfig.json',
    'tsconfig.*.json',
    '*.d.ts',
  ],
};

export default config;

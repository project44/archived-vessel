import { IGNORE_PATHS } from '@vessel/constants';
import { PrettierConfig } from '@beemo/driver-prettier';

const config: PrettierConfig = {
  ...(require('prettier-config-vessel') as PrettierConfig),
  ignore: [
    ...IGNORE_PATHS,
    // Config files
    'CHANGELOG.md',
    'lerna.json',
    'package.json',
    'tsconfig.json',
    'tsconfig.*.json',
    '*.d.ts',
  ],
};

export default config;

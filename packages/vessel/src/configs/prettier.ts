import { IGNORE_PATHS } from '@manifest-ui/vessel-constants';
import { PrettierConfig } from '@beemo/driver-prettier';

const config: PrettierConfig = {
  ...(require('@manifest-ui/prettier-config') as PrettierConfig),
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

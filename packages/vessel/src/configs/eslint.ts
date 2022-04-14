import { ESLintConfig } from '@beemo/driver-eslint';
import { IGNORE_PATHS } from '@manifest-ui/vessel-constants';

const { tool } = process.beemo;
const { react } = tool.config.settings;

const config = {
  extends: ['@manifest-ui/eslint-config'],
  ignore: [...IGNORE_PATHS, '*.min.js', '*.map', '*.snap'],
  root: true,
};

if (react) {
  config.extends.push('@manifest-ui/eslint-config/react');
}

export default config as ESLintConfig;

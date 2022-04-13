import { ESLintConfig } from '@beemo/driver-eslint';
import { IGNORE_PATHS } from '@vessel/constants';

const { tool } = process.beemo;
const { react } = tool.config.settings;

const config = {
  extends: ['vessel'],
  ignore: [...IGNORE_PATHS, '*.min.js', '*.map', '*.snap'],
  root: true,
};

if (react) {
  config.extends.push('vessel/react');
}

export default config as ESLintConfig;

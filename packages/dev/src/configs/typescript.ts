import type { TypeScriptConfig } from '@beemo/driver-typescript';

const { tool } = process.beemo;
const { react } = tool.config.settings;

const config = require('tsconfig-vessel/tsconfig.json') as TypeScriptConfig;

const options = config.compilerOptions!;

if (tool.package.workspaces) {
  Object.assign(
    options,
    (require('tsconfig-vessel/tsconfig.workspaces.json') as TypeScriptConfig).compilerOptions,
  );
}

if (react) {
  if (options.lib) {
    options.lib.push('dom');
  } else {
    options.lib = ['dom'];
  }

  if (react === 'automatic') {
    options.jsx = __DEV__ ? 'react-jsx-dev' : 'react-jsx';
  } else {
    options.jsx = 'react';
  }
}

export default config;

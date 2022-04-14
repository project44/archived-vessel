import type { BabelConfig } from '@beemo/driver-babel';

const { tool } = process.beemo;
const { esm, react } = tool.config.settings;

const config: BabelConfig = {
  babelrc: true,
  babelrcRoots: tool.project.getWorkspaceGlobs({ relative: true }),
  comments: false,
  presets: [['@manifest-ui/babel-preset', { modules: esm, react }]],
};

export default config;

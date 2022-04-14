import type { JestConfig } from '@beemo/driver-jest';

const { tool } = process.beemo;
const { projects, react } = tool.config.settings;

const config: JestConfig = {
  preset: '@manifest-ui/jest-preset',
  testEnvironment: react ? 'jsdom' : 'node',
};

if (tool.package.workspaces && projects) {
  config.projects = tool.project
    .getWorkspaceGlobs({ relative: true })
    .map((wsPath: string) => `<rootDir>/${wsPath}`);
}

export default config;

import { IGNORE_PATHS, ROOT } from '@manifest-ui/vessel-constants';
import fs from 'fs';
import path from 'path';

const setupFilesAfterEnv: string[] = [];
const setupFilePath = path.join(ROOT, 'jest.setup.js');

// Only include the setup file if available.
if (fs.existsSync(setupFilePath)) {
  setupFilesAfterEnv.push(setupFilePath);
}

const config = {
  collectCoverageFrom: ['**/{src,__tests__}/**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: IGNORE_PATHS.map(path => path.replace(/\*+/g, '.*')),
  coverageReporters: ['text-summary', 'html'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleNameMapper: {
    '\\.{css,sass,scss,less,gif,png,jpg,jpeg,svg,gql,graphql,yml,yaml}$':
      require.resolve('./fileMock.js'),
  },
  setupFilesAfterEnv,
  testEnvironment: 'node',
  testMatch: ['**/{src,test,tests,__tests__}/**/*.spec.{js,jsx,ts,tsx}'],
  testRunner: 'jest-circus/runner',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { rootMode: 'upward' }],
  },
};

export default config;

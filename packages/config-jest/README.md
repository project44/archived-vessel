# Vessel - Jest config

A Project44 Beemo Jest config based on `jest-preset-vessel`.

## Installation

```bash
yarn install --dev jest @beemo/core @beemo/driver-jest @manifest-ui/vessel-config-jest
```

## Usage

Create a `configs/jest.ts` file in your Beemo configuration module that re-exports this config.

```ts
export { default } from '@manifest-ui/vessel-config-jest';
```

## Settings

The following `settings` can be defined to customize Jest even further.

- `projects` (`boolean | string[]`) - Enable Jest projects. If `true` is passed, will be resolved
  using workspaces, otherwise requires an array of explicit strings. Defaults to `false`.
- `react` (`boolean | classic | automatic`) - Set the testing environment to `jsdom` to support
  React. Defaults to `false`.

```ts
export default {
  module: '<config-module>',
  drivers: ['jest'],
  settings: {
    react: true,
  },
};
```

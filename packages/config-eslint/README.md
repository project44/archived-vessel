# Vessel - ESLint config

A Project44 Beemo ESLint config based on `eslint-config-vessel`.

## Installation

```bash
yarn install --dev eslint @beemo/core @beemo/driver-eslint @manifest-ui/vessel-config-eslint
```

## Usage

Create a `configs/eslint.ts` file in your Beemo configuration module that re-exports this config.

```ts
export { default } from '@manifest-ui/vessel-config-eslint';
```

## Settings

The following `settings` can be defined and will be passed to the config.

- `react` (`boolean | classic | automatic`) - Enable React rules. Defaults to `false`.

```ts
export default {
  module: '<config-module>',
  drivers: ['eslint'],
  settings: {
    react: 'automatic',
  },
};
```

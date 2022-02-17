# Vessel - Babel config

A Project44 Beemo Babel config based on `babel-preset-Vessel`.

## Installation

```bash
yarn install --dev @babel/core @beemo/core @beemo/driver-babel @manifest-ui/vessel-config-babel
```

## Usage

Create a `configs/babel.ts` file in your Beemo configuration module that re-exports this config.

```ts
export { default } from '@manifest-ui/vessel-config-babel';
```

## Settings

The following `settings` can be defined and will be passed to the preset.

- `react` (`boolean | classic | automatic`) - Enable the React plugin and the defined JSX runtime.

```ts
export default {
  module: '<config-module>',
  drivers: ['babel'],
  settings: {
    react: 'automatic',
  },
};
```

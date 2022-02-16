# Vessel - TypeScript config

A Project44 Beemo TypeScript config based on `tsconfig-vessel`.

## Installation

```bash
yarn install --dev typescript @beemo/core @beemo/driver-typescript @vessel/config-typescript
```

> Config will automatically assume project references are being used if a project is using
> workspaces.

## Usage

Create a `configs/typescript.ts` file in your Beemo configuration module that re-exports this config
with your own `include`, `exclude`, etc.

```ts
import config from '@vessel/config-typescript';

export default {
  ...config,
  include: ['src/**/*'],
};
```

## Settings

The following `settings` can be defined and will be enable compiler options.

- `react` (`boolean | classic | automatic`) - Enable React (or React Native) syntax with the defined
  JSX runtime. Defaults to `false`.

```ts
export default {
  module: '<config-module>',
  drivers: ['typescript'],
  settings: {
    react: 'automatic',
  },
};
```

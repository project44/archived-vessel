# 🤖 Vessel

Centralized CLI for JavaScript and TypeScript developer tools.
[Built on and powered by Beemo](https://github.com/beemojs/beemo).

Intended for use by the Project44 team. Usage outside of the organization is as-is.

## Packages

- [@manifest-ui/vessel-dev](./packages/dev)

## Features

- Stand-alone configurations and plugins for `babel, eslint, jest, prettier and typescript`, to be
  used with or without beemo.
- Drivers powering Beemo process implementations.
- A centralized `dev` package that pieces the configurations with the drivers to produce a Beemo
  [Provider](https://beemo.dev/docs/provider/).

## Installation

```bash
yarn add --dev @manifest-ui/vessel
```

## Setup

Create a `.config/beemo.ts` file in the root of your project that configures `@manifest-ui/vessel`
as the configuration module. Be sure to enable all drivers and any settings.

```ts
// .config/beemo.ts
export default {
  module: '@manifest-ui/vessel',
  drivers: ['babel', 'eslint', 'jest', 'prettier', 'typescript'],
  settings: {},
};
```

### Settings

The following Beemo `settings` can be defined and will be passed to applicable drivers.

- `node` (`boolean`) - Current project will target Node.js instead of the browser. Defaults to
  `false`.
- `projects` (`boolean | string[]`) - Enable Jest projects. If `true` is passed, will be resolved
  using workspaces, otherwise requires an array of explicit strings. Defaults to `false`.
- `next` (`boolean`) - Enable Next.js for all drivers. Defaults to `false`.
- `react` (`boolean | classic | automatic`) - Enable React and JSX support for all drivers. Defaults
  to `false`.

### Overrides

If you would like to override a driver config, create a `.config/beemo/<driver>.ts` file in the root
of the project.
[View the official Beemo docs for more information](https://beemo.dev/docs/consumer#overriding-configs).

```ts
// .config/beemo/eslint.ts
export default {
  rules: {
    'no-param-reassign': 'off',
  },
};
```

## Drivers

The following drivers are directly supported in this configuration module, and automatically passed
common command line options when being ran.

- Babel
- ESLint
- Jest
- Prettier
- TypeScript

> Please refer to their documentation for more information on how each one is configured.

## Scaffolds

Once your project has been configured to use Beemo, you can scaffold specific files using our
built-in templates.

### project/dotfiles

Will scaffold common dotfiles like `.gitignore`.

```bash
beemo scaffold project dotfiles
```

### project/package

Will append fields to the root `package.json`.

- Adds `scripts` for common actions like linting, testing, etc.

```bash
beemo scaffold project package
```

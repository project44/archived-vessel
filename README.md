# 🤖 Vessel

Centralized CLI for JavaScript and TypeScript developer tools. [Built on and powered by Beemo](https://github.com/beemojs/beemo).

Intended for use by the Project44 team. Usage outside of the organization is as-is.

## Packages

- [@vessel/dev](./packages/dev)
- [@vessel/config-babel](./packages/config-babel)
- [@vessel/config-eslint](./packages/config-eslint)
- [@vessel/config-prettier](./packages/config-prettier)
- [@vessel/config-typescript](./packages/config-typescript)

## Features

- Stand-alone configurations and plugins for `babel, eslint, jest, prettier and typescript`, to be used with or without beemo.
- Drivers powering Beemo process implementations.
- A centralized `dev` package that pieces the configurations with the drivers to produce a Beemo [Provider](https://beemo.dev/docs/provider/).

## Quick start

```bash
yarn add --dev @vessel/dev
```

Please refer to the [@vessel/dev](./packages/dev) docs for detailed installation and setup instructions.

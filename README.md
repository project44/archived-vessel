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

## Quick start

```bash
yarn add --dev @manifest-ui/vessel-dev
```

Please refer to the [@manifest-ui/vessel-dev](./packages/dev) docs for detailed installation and
setup instructions.

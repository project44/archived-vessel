# Vessel - Prettier config

A Project44 Beemo Prettier config based on `prettier-config-vessel`.

## Installation

```bash
yarn install --dev prettier @beemo/core @beemo/driver-prettier @manifest-ui/vessel-config-prettier
```

## Usage

Create a `configs/prettier.ts` file in your Beemo configuration module that re-exports this config.

```ts
export { default } from '@manifest-ui/vessel-config-prettier';
```

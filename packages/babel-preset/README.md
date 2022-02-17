# babel-preset-vessel

A Babel preset with Typescript and optional React support for vessel projects. Created for uniting
testing, linting, local development and applications. If building deployable packages, it is
suggested to use [Packemon](https://packemon.dev) instead.

## Installation

```bash
yarn add --dev babel-preset-vessel
```

## Usage

Add the preset to your root `babel.config.js`.

```js
module.exports = {
  presets: ['vessel'],
};
```

## Options

The following options can be passed to the preset.

- `modules` (`boolean`) - Force transpilation to use ECMA script module syntax. Defaults to `false`
  (`auto` modules).
- `react` (`boolean | classic | automatic`) - Enable the React plugin and the defined JSX runtime.
  Defaults to `false`.
- `targets` (`Record<string, string> | string[] | string`) - Override the target environment.
  Defaults to Node.js `current`.

```js
module.exports = {
  presets: [['vessel', { react: true }]],
};
```

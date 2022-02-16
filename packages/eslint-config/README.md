# eslint-config-vessel

ESLint config with optional presets extending the eslint recommended settings.

## Installation

```bash
yarn add --dev eslint eslint-config-vessel
```

## Usage

Extend the `vessel` config in your root `.eslintrc.js`.

```js
module.exports = {
  root: true,
  extends: ['vessel'],
};
```

### Presets

The following additional configs can also be extended, but are not enabled by default.

- `vessel/react` - Enables the [react](https://www.npmjs.com/package/eslint-plugin-react),
  [react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks), and
  [jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) plugins.

## Plugins

- [eslint:recommended](https://eslint.org/docs/rules).
- [jest](https://www.npmjs.com/package/eslint-plugin-jest).
- [prettier](https://github.com/prettier/eslint-plugin-prettier#readme).
- [@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint).

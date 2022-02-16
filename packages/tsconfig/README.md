# tsconfig-vessel

Typescript configs for vessel projects

> These configs assume typescript is used as a type-checker only

## Installation

```bash
yarn add typescript tsconfig-vessel --dev
```

## Usage

Extend your `tsconfig.json` in your project root:

```json
{
  "extends": "tsconfig-vessel/tsconfig.json"
}
```

**Workspaces**

Extend the following in your root and workspaces `tsconfig`'s:

```json
{
  "extends": "tsconfig-vessel/tsconfig.workspaces.json"
}
```

**React**

Extend the following in your root `tsconfig`:

```json
{
  "extends": "tsconfig-vessel/tsconfig.react.json"
}
```

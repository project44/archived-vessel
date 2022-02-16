export type PluginItem = string | [string, object];

export interface BabelPresetOptions {
  modules?: boolean;
  react?: boolean | 'automatic' | 'classic';
  targets?: Record<string, string> | string[] | string;
}

export default function babelPresetVessel(api: unknown, options: BabelPresetOptions = {}) {
  const { modules, react, targets } = options;

  const plugins: PluginItem[] = [
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    ['babel-plugin-transform-dev', { evaluate: false }],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
  ];

  const presets: PluginItem[] = [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        exclude: [
          '@babel/plugin-transform-regenerator',
          '@babel/plugin-transform-async-to-generator',
        ],
        loose: true,
        modules: modules ? false : 'auto',
        shippedProposals: true,
        targets: targets ? targets : { node: 'current' },
        useBuiltIns: false,
      },
    ],
    ['@babel/preset-typescript', { allowDeclareFields: true }],
  ];

  if (react) {
    presets.push([
      '@babel/preset-react',
      {
        development: __DEV__,
        runtime: react === 'automatic' ? 'automatic' : 'classic',
      },
    ]);
  }

  return {
    plugins,
    presets,
  };
}

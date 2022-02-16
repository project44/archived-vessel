const { declare } = require('@babel/helper-plugin-utils');

module.exports = declare((_, options) => {
  const { modules, react, targets } = options;

  const envOptions = {
    bugfixes: true,
    exclude: ['@babel/plugin-transform-regenerator', '@babel/plugin-transform-async-to-generator'],
    loose: true,
    modules: modules ? false : 'auto',
    shippedProposals: true,
    targets: targets ? targets : { node: 'current' },
    useBuiltIns: false,
  };

  const plugins = [
    '@babel/plugin-proposal-export-default-from',
		'@babel/plugin-proposal-export-namespace-from',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
  ];

  const presets = [
    [require('@babel/preset-env'), envOptions],
    [require('@babel/preset-typescript'), { allowDeclareFields: true }],
  ];

  if (react) {
    presets.push([
      '@babel/preset-react',
      {
        development: process.env.NODE_ENV === 'development',
        runtime: react === 'automatic' ? 'automatic' : 'classic',
      },
    ]);
  }

  return {
    plugins,
    presets,
  };
});
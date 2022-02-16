import type eslint from 'eslint';

const config: eslint.Linter.Config = {
  plugins: ['import'],
  rules: {
    'import/first': 'error',
    'import/named': 'off',
    'import/newline-after-import': 'error',
    'import/no-amd': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/order': ['error', { groups: [], 'newlines-between': 'never' }],
  },
};

export default config;

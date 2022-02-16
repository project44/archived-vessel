import type eslint from 'eslint';

const config: eslint.Linter.Config = {
  overrides: [
    {
      env: {
        browser: true,
      },
      extends: [
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
      ],
      files: ['*.tsx'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: ['jsx-a11y', 'react', 'react-hooks'],
      rules: {
        'react/forbid-prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/sort-prop-types': 'off',
        'react-hooks/exhaustive-deps': 'error',
        'react-hooks/rules-of-hooks': 'error',
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ],
};

export default config;

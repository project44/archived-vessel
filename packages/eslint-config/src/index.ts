import type eslint from 'eslint';

const config: eslint.Linter.Config = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'prettier',
  ],
  globals: {
    [`__DEV__`]: 'readonly',
    [`__PROD__`]: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 10,
    project: './tsconfig.eslint.json',
  },
  plugins: ['jsx-a11y', 'react-hooks', '@typescript-eslint/eslint-plugin'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'comma-dangle': 'off',
    'import/named': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-param-reassign': 'off',
    'no-return-await': 'error',
    'no-use-before-define': 0,
    'prefer-destructuring': 'off',

    'react/display-name': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/sort-prop-types': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
  },
  overrides: [
    {
      env: {
        jest: true,
        'jest/globals': true,
      },
      extends: ['plugin:jest/recommended'],
      files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
      plugins: ['jest'],
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        'jest/no-alias-methods': 'error',
        'jest/no-disabled-tests': 'warn',
        'jest/no-done-callback': 'error',
        'jest/no-export': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/no-if': 'error',
        'jest/no-jasmine-globals': 'error',
        'jest/no-jest-import': 'error',
        'jest/no-standalone-expect': 'error',
        'jest/no-test-prefixes': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-spy-on': 'error',
        'jest/prefer-to-be': 'warn',
        'jest/prefer-to-contain': 'warn',
        'jest/prefer-to-have-length': 'warn',
        'jest/prefer-todo': 'error',
        'jest/valid-expect': 'error',
        'jest/valid-title': 'error',
      },
    },
  ],
};

export default config;

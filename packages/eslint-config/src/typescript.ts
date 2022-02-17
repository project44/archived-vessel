import { getRootProjectReferences, ROOT, TSCONFIG_JSON_PATH } from '@manifest-ui/vessel-constants';
import type eslint from 'eslint';
import fs from 'fs';
import path from 'path';

const tsConfigEslintPath = path.join(ROOT, 'tsconfig.eslint.json');

let project: string[] | string = '';

if (fs.existsSync(tsConfigEslintPath)) {
  project = tsConfigEslintPath;
}

if (!project) {
  project =
    getRootProjectReferences()?.map(ref => path.join(ROOT, ref.path, 'tsconfig.json')) ??
    TSCONFIG_JSON_PATH;
}

const config: eslint.Linter.Config = {
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      files: ['*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project,
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            minimumDescriptionLength: 5,
            'ts-check': false,
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': true,
            'ts-nocheck': true,
          },
        ],
        '@typescript-eslint/ban-types': [
          'error',
          {
            types: {
              '{}': false,
            },
          },
        ],
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/unbound-method': 'off',
      },
    },
  ],
};

export default config;

import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import path from 'path';
import { fileURLToPath } from 'url';

// Calculate __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create compatibility layer
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: eslint.configs.recommended,
});

export default [
    {
        // Define files to lint - only include src directory
        files: ['src/**/*.{js,ts,jsx,tsx}'],
    },
    ...compat.extends(
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended'
    ),
    {
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                tsconfigRootDir: __dirname,
                project: [
                    './tsconfig.json',
                    './tsconfig.base.json',
                    './tsconfig.eslint.json',
                ],
            },
        },
        plugins: {
            'import': (await import('eslint-plugin-import')).default,
        },
        rules: {
            '@typescript-eslint/restrict-template-expressions': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
            ],
            '@typescript-eslint/consistent-type-imports': [
                'error',
                { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
            ],
            'import/consistent-type-specifier-style': ['error', 'prefer-inline'],

            // These rules are only disabled because we hit a bug in linting.
            '@typescript-eslint/no-unsafe-argument': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-return': 'off',
            '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        },
        ignores: ['dist/**', 'templates/**'],
    }
];
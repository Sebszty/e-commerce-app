import nextPlugin from '@next/eslint-plugin-next'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import tsPluginAirbnb from 'eslint-config-airbnb'
import tsPluginAirbnbTypescript from 'eslint-config-airbnb-typescript'
import importPlugin from 'eslint-plugin-import'
import jestPlugin from 'eslint-plugin-jest'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import perfectionist from 'eslint-plugin-perfectionist'
import prettierPlugin from 'eslint-plugin-prettier'
import reactPlugin from 'eslint-plugin-react'
import unusedImports from 'eslint-plugin-unused-imports'

export default [
    perfectionist.configs['recommended-natural'],
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        ignores: [
            '.storybook/**/*',
            'storybook-static/**/*',
            'eslint.config.js',
            'jest.config.js',
            'next-env.d.ts',
            'next.config.js',
            'postcss.config.js',
            'tailwind.config.ts',
            '__mocks__/**/*',
            'tests/__mocks__/react-inlinesvg.tsx',
        ],
        languageOptions: {
            ecmaVersion: 'latest',
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                project: 'tsconfig.json',
            },

            sourceType: 'module',
        },

        plugins: {
            '@next/next': nextPlugin,
            '@typescript-eslint': tsPlugin,
            'airbnb-typescript': tsPluginAirbnbTypescript,
            'eslint-config-airbnb': tsPluginAirbnb,
            import: importPlugin,
            jest: jestPlugin,
            'jsx-a11y': jsxA11yPlugin,
            perfectionist: perfectionist,
            prettier: prettierPlugin,
            react: reactPlugin,
            'unused-imports': unusedImports,
        },
        rules: {
            // Next.js rules
            '@next/next/no-html-link-for-pages': 'error',
            '@typescript-eslint/explicit-function-return-type': 'error',
            '@typescript-eslint/explicit-module-boundary-types': 'error',
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-namespace': 'off',
            '@typescript-eslint/no-unused-expressions': ['error', {allowShortCircuit: true}],

            // TypeScript rules
            'func-names': 'error',
            'jsx-quotes': ['error', 'prefer-single'],
            'no-confusing-arrow': 'off',
            'no-console': ['warn', {allow: ['warn', 'error', 'info']}],
            'no-else-return': ['error', {allowElseIf: true}],
            // General rules
            'prefer-destructuring': 'error',

            quotes: ['error', 'single', {allowTemplateLiterals: true, avoidEscape: true}],

            'react/jsx-curly-brace-presence': ['error', {children: 'never', props: 'never'}],
            'react/jsx-no-string-literal': ['off'],
            // React rules
            'react/jsx-uses-react': 'error',
            'react/jsx-uses-vars': 'error',
            'react/no-unescaped-entities': 'error',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': ['warn'],
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
]

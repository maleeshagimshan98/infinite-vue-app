import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import vuePlugin from 'eslint-plugin-vue';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['src/**/*.{js,ts,vue}', 'test/**/*.{js,ts}', 'vite.config.ts'],
    ignores: ['node_modules', 'dist', 'build'],
    languageOptions: {
      globals: globals.node,
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        extraFileExtensions: ['.vue'], // Support Vue files
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      vue: vuePlugin,
      prettier: prettierPlugin,
    },
    rules: {
      /** ✅ TypeScript Rules */
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': 'error',

      /** ✅ Vue Rules */
      'vue/multi-word-component-names': 'off', // Disable if single-word components are okay
      'vue/no-unused-vars': 'warn',

      /** ✅ Prettier Rules */
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'lf',
          semi: true,
          singleQuote: true,
          trailingComma: 'all',
          printWidth: 120,
          tabWidth: 2,
        },
      ],

      /** ✅ Node.js & General JS Rules */
      'eol-last': ['error', 'always'],
      'linebreak-style': ['error', 'unix'],
      'no-console': 'warn',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...vuePlugin.configs['flat/recommended'],
  prettier,
];

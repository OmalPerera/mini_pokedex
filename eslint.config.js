// https://docs.expo.dev/guides/using-eslint/
const {defineConfig} = require('eslint/config')
const expoConfig = require('eslint-config-expo/flat')
const unusedImportsPlugin = require('eslint-plugin-unused-imports')
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin')
const importPlugin = require('eslint-plugin-import')
const reactNativePlugin = require('eslint-plugin-react-native')
const mobxPlugin = require('eslint-plugin-mobx')

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*', 'node_modules/'],
  },
  {
    rules: {
      'unused-imports/no-unused-imports': ['error'],
      'unused-imports/no-unused-vars': ['error'],
      'react/no-direct-mutation-state': ['error'],
      'prefer-const': ['error'],
      'no-undef': 'off',
      'no-lone-blocks': 0,
      'no-empty': 2,
      'no-throw-literal': 2,
      'react-native/no-inline-styles': 0,
      'react-native/no-unused-styles': 1,
      '@typescript-eslint/no-unused-vars': 0,
      'no-useless-escape': 0,
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/no-explicit-any': 1,
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'no-trailing-spaces': 'error',
      'mobx/exhaustive-make-observable': 'warn',
      'mobx/unconditional-make-observable': 'error',
      'mobx/missing-make-observable': 'error',
    },
  },
  {
    plugins: {
      'unused-imports': unusedImportsPlugin,
      'typescript-eslint': typescriptEslintPlugin,
      'react-native': reactNativePlugin,
      mobx: mobxPlugin,
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/array-type': 'off',
    },
  },
])

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['sort-keys-custom-order', 'simple-import-sort'],
  rules: {
    'no-console': ['error', {allow: ['warn', 'info', 'error']}],
    'no-undef': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-keys-custom-order/object-keys': ['error', {orderedKeys: ['id', 'name', 'title']}],
    'sort-keys-custom-order/type-keys': ['error', {orderedKeys: ['id', 'name', 'title']}],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}

module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
    "plugin:import/typescript",
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier/standard',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react', '@typescript-eslint', 'import', 'prettier'],
  rules: {
    "react/prop-types": 0,
    "no-use-before-define": ['error', { 'variables': false }]
  },
  settings: {
    'import/resolver': {
      typescript: {
        'project': "packages/*/tsconfig.json"
      },
    },
    react: {
      version: 'detect',
    },
  },
};

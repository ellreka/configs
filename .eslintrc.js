module.exports = {
  extends: [
    'standard',
    'standard-with-typescript',
    'standard-react',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    'prettier/standard',
  ],
  plugins: [
    'prettier',
    '@typescript-eslint',
    'simple-import-sort',
    'sort-destructure-keys',
    'typescript-sort-keys',
    'import',
    'react-hooks',
    'jsx-a11y'
  ],
  rules: {
    'sort-imports': 'off',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'typescript-sort-keys/interface': 'warn',
    'typescript-sort-keys/string-enum': 'warn',
    'react/prop-types': 'off',
    'sort-destructure-keys/sort-destructure-keys': [
      'warn',
      { caseSensitive: false }
    ]
  },
  parserOptions: {
    project: './tsconfig.json'
  }
}

module.exports = {
  extends: [
    'standard',
    'standard-react',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
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

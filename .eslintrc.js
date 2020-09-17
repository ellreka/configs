module.exports = {
  extends: [
    'standard',
    'standard-with-typescript',
    'standard-react',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    'prettier/standard'
  ],
  plugins: [
    'prettier',
    '@typescript-eslint',
    'simple-import-sort',
    'import',
    'react-hooks',
    'jsx-a11y'
  ],
  rules: {
    'simple-import-sort/sort': 'error'
  },
  parserOptions: {
    project: './tsconfig.json'
  }
}

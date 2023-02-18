module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['*.js', 'features/support/NightwatchWorld.ts'],
  rules: {
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
}

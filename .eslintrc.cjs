module.exports = {
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic'
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    '@typescript-eslint/array-type': 'error'
  }
}

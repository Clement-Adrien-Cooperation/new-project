import js from '@eslint/js'
import stylisticPlugin from '@stylistic/eslint-plugin'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  { ignores: ['**/dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      '@stylistic': stylisticPlugin
    },
    rules: {
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/comma-spacing': ['error', { 'before': false, 'after': true }],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/indent': ['error', 2, { 'offsetTernaryExpressions': true, 'SwitchCase': 1 }],
      '@stylistic/multiline-ternary': ['error', 'always-multiline'],
      '@stylistic/no-mixed-operators': 'error',
      '@stylistic/no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/operator-linebreak': ['error', 'before'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/space-infix-ops': 'error',

      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_', 'varsIgnorePattern': '^_' }],

      'no-useless-return': 'error',
      'semi': ['error', 'never'],
      'sort-imports': ['error', {
        'ignoreCase': true,
        'ignoreDeclarationSort': true,
        'ignoreMemberSort': false,
        'memberSyntaxSortOrder': ['all', 'multiple', 'single', 'none'],
        'allowSeparatedGroups': true
      }]
    }
  }
)

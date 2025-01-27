import baseConfig from '../../eslint.config.js'

import reactA11y from 'eslint-plugin-jsx-a11y'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    extends: [baseConfig],
    plugins: {
      ...baseConfig.plugins,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...baseConfig.rules,
      ...reactA11y.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
    }
  }
)

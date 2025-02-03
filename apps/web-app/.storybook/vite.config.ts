import { mergeConfig } from 'vite'
import baseConfig from '../vite.config'
import path from 'path'

export default mergeConfig(baseConfig, {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  }
})

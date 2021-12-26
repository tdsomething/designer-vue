import { defineConfig } from 'vite'
import baseConfig from './base.config'

export default defineConfig({
  ...baseConfig,
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/global.scss";'
      }
    }
  }
})

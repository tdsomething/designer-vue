import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import md from 'vite-plugin-md'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, '../site'),
      packages: resolve(__dirname, '../packages')
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    md()
  ]
})

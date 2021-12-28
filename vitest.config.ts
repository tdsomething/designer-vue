/// <reference types="vitest" />

import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({
      imports: ['vitest'],
      dts: true
    })
  ],
  test: {
    global: true,
    environment: 'happy-dom',
    include: ['**/*.spec.ts'],
    exclude: ['node_modules', '.idea', '.git', '.cache']
  }
})

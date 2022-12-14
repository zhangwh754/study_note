import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import { Plugin as importToCDN } from 'vite-plugin-cdn-import'
import config from './src/config'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      createHtmlPlugin({
        minify: true,
        entry: mode === 'production' ? 'src/main.prod.js' : 'src/main.dev.js'
      }),
      importToCDN({
        modules: config.cdnModules
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      open: true
    }
  }
})

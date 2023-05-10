import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root : './test',
  resolve: {
    alias: {
      '~bootstrap': './node_modules/bootstrap',
    }
  },
  build : {
    outDir : './dist/',
    emptyOutDir : true,
  },
})

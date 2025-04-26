import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: './test',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // Alias for 'src' directory
      '~bootstrap': fileURLToPath(new URL('./node_modules/bootstrap', import.meta.url)), // Bootstrap alias
    },
  },
  build: {
    outDir: './dist/',
    emptyOutDir: true,
  },
});

import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    open: true,
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'consoleNext',
      formats: ['es', 'umd', 'iife'],
    },
  },
})

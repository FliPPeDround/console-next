import { defineConfig } from 'vite'
import { resolve } from 'path'
import { terser } from 'rollup-plugin-terser'

export default defineConfig({
  build: {
    target: 'esnext',
    minify: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'console-next',
      formats: ['es', 'umd', 'iife']
    },
    rollupOptions: {
      plugins: [
        terser()
      ]
    }
  }
})
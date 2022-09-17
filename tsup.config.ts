import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['cjs', 'esm', 'iife'],
  target: 'node14',
  splitting: true,
  dts: false,
  tsconfig: './tsconfig.json',
  clean: true,
})

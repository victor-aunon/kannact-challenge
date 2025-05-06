import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      config: path.resolve(__dirname, './src/config'),
      api: path.resolve(__dirname, './src/api'),
      domain: path.resolve(__dirname, './src/domain'),
      ui: path.resolve(__dirname, './src/ui'),
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      'preview-router': fileURLToPath(new URL('./src/preview-site/lib/preview-router.tsx', import.meta.url)),
    },
  },
})

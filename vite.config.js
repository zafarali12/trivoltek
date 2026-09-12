import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
      },
    },
    // Raise the warning threshold slightly (Pillars is intentionally large)
    chunkSizeWarningLimit: 800,
  },
})

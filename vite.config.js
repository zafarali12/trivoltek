import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Split heavy vendor chunks separately
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-framer': ['framer-motion'],
          'vendor-misc': ['lucide-react', 'react-intersection-observer'],
        },
      },
    },
    // Raise the warning threshold slightly (Pillars is intentionally large)
    chunkSizeWarningLimit: 800,
  },
})

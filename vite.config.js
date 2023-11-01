import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Update the assetFileNames pattern without the "[query]" placeholder
        assetFileNames: 'assets/ASSETS/[name]-[hash][ext]',
      },
    },
  },
})


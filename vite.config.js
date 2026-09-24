import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/yuktha-portfolio/',
  plugins: [react()],
  server: {
    port: 5180,
    strictPort: true,
    host: true
  }
})

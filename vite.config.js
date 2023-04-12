import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // controla si el servidor Vite debería servir archivos estáticos desde el sistema de archivos
      allow: ['.']
    }
  }
})


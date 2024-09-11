import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { // Recomendado adicionar isso aqui em todo projeto
    port: 3000
  }
})

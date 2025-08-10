import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/job-application-tracker/', 
  plugins: [react()],
})
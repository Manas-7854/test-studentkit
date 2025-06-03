import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/Manas-7854/test-studentkit'  // Replace with your actual repository name
})
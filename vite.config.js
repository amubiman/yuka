import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/yuka/", // इथे तुमच्या अचूक रेपॉजिटरीचे नाव टाका
})

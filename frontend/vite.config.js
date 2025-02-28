import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "5173-lewisnjue-spamdetection-3g9q3xtlw5q.ws-eu118.gitpod.io"
    ]
  }
})

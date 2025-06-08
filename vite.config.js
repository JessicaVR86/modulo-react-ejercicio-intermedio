import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: "/",
    watch: {
      usePolling: true
    }
  },
  base: "https://github.com/JessicaVR86.io/modulo-react-ejercicio-intermedio/"
});

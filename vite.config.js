import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "https://jessicavr86.github.io/modulo-react-ejercicio-intermedio/",
  plugins: [react()],
  server: {
    open: "/",
    watch: {
      usePolling: true,
    },
  },
});

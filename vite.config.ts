import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0", // Allow access from outside container
    port: 5173,
    watch: {
      usePolling: true, // Enable polling for Docker compatibility
    },
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
    hmr: {
      overlay: true,
    },
  },
  build: {
    outDir: "dist",
  },
});

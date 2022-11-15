import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: "", // proxy to backend server
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        "react", // ignore react stuff
        "react-dom",
        "react-is",
      ],
    },
  },
});

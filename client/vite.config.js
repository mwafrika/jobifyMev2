import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

//import reactRefresh from '@vitejs/plugin-react-refresh'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // proxy: "",  proxy to backend server
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react", "react-dom", "react-is"],
    },
    chunkSizeWarningLimit: 1600, // suppress warning
  },
  resolve: {
    alias: {
      react: "https://unpkg.com/react@18/umd/react.production.min.js",
      "react-dom":
        "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js",
    },
  },
});

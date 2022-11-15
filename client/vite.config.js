import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // proxy: "",  proxy to backend server
  },
  plugins: [
    react({
      babel: {
        parserOpts: {
          plugins: ["decorators-legacy"],
        },
      },
    }),
  ],
  build: {
    rollupOptions: {
      external: ["react", "react-dom", "react-is"],
    },
    chunkSizeWarningLimit: 1600, // suppress warning
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      external: ["react", "react-dom", "react-is"],
    },
    chunkSizeWarningLimit: 1600, // suppress warning
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // proxy: "",  proxy to backend server
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react", "react-dom", "react-is"],
      output: {
        //added output object
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-is": "ReactIs",
        },
      },
    },
    chunkSizeWarningLimit: 1600, // suppress warning
  },
});

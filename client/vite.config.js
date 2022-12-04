import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {},
  },
  build: {
    rollupOptions: {
      //   // external: ["react", "react-dom", "react-is"],
      external: ["react", "react-dom", "react-is", "react-router-dom"],
      // external: ["react"],
    },
    chunkSizeWarningLimit: 1600, // suppress warning
  },
  // resolve: {
  //   alias: {
  //     react: "https://cdn.skypack.dev/react",
  //     "react-dom": "https://cdn.skypack.dev/react-dom",
  //     "react-is": "https://cdn.skypack.dev/react-is",
  //     "react-router-dom": "https://cdn.skypack.dev/react-router-dom",
  //   },
  // },
});

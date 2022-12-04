import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {},
  },
  // build: {
  //   rollupOptions: {
  //     external: ["react", "react-dom", "react-is"],
  //   },
  //   chunkSizeWarningLimit: 1600, // suppress warning
  // },
  // resolve: {
  //   alias: {
  //     react: "https://cdn.skypack.dev/react",
  //     "react-dom": "https://cdn.skypack.dev/react-dom",
  //   },
  // },
});

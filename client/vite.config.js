import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import externalGlobals from "rollup-plugin-external-globals";

export default defineConfig({
  plugins: [
    react(),
    externalGlobals({
      react: "React",
    }),
  ],
  input: ["src/index.jsx"],
  output: {
    dir: "dist",
    format: "es",
  },
  build: {
    rollupOptions: {
      external: ["react", "react-dom", "react-is"],
    },
    chunkSizeWarningLimit: 1600, // suppress warning
  },
});

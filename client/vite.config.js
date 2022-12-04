import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 1600, // suppress warning
  },
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            { ssr: false, pure: true, displayName: true, fileName: false },
          ],
        ],
      },
    }),
  ],
});

import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 1600, // suppress warning
  },
  plugins: [
    reactRefresh(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
  ],
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   build: {
//     rollupOptions: {
//       external: ["react", "react-dom", "react-router-dom", "react-is"],
//     },
//     chunkSizeWarningLimit: 1600, // suppress warning
//   },
//   plugins: [react()],
//   // define: {
//   //   "process.env": {},
//   // },
// });

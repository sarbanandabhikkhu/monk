import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        clientsClaim: true,
        skipWaiting: true
      },
      srcDir: "src",
      filename: "serviceWorker.js",
      strategies: "injectManifest",
      injectRegister: false, // auto
      manifest: false,
      injectManifest: {
        injectionPoint: null
      },
      devOptions: {
        enabled: true,
        type: "module"
      }
    })
  ],
  esbuild: {
    // https://stackoverflow.com/questions/74620427/how-to-configure-vite-to-allow-jsx-syntax-in-js-files
    loader: "jsx",
    include: ["src/**/*.js", "src/**/*.jsx", "node_modules/**/*.js", "node_modules/**/*.jsx"]
  }
});

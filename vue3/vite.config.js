import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import federation from "@originjs/vite-plugin-federation";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
  plugins: [
    vuePlugin(),
    tailwindcss(),
    federation({
      name: 'host-app',
      remotes: {
        remote_app: "http://localhost:5001/assets/remoteEntry.js",
      },
    }),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: i => `__tla_${i}`
    })
  ],
  server: {
    port: 5000,
  }
})

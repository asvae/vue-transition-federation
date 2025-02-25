import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue2'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vuePlugin(),
    federation({
      name: 'remote-app',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductPage.vue': './src/ProductPage.vue',
        './UserDashboard.vue': './src/UserDashboard.vue',
        './someJsFile.js': './src/someJsFile.js',
        './mainFederation.js': './src/mainFederation.js',
      },
    })
  ],
  server: {
    port: 5001,
  },
})

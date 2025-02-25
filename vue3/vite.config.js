import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vuePlugin(),
    tailwindcss(),
    federation({
      name: 'host-app',
      remotes: {
        remote_app: "http://localhost:5001/assets/remoteEntry.js",
      },
    })
  ],
  server: {
    port: 5000,
  }
})

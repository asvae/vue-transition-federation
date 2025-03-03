import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import federation from "@originjs/vite-plugin-federation";
import topLevelAwait from "vite-plugin-top-level-await";
import autoprefixer from 'autoprefixer';
import prefixer from 'postcss-prefix-selector';

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
  },
  css: {
    postcss: {
      // plugins: [
      //   prefixer({
      //     prefix: '.tailwind-on', // Adds prefix to all Tailwind styles
      //     transform(prefix, selector, prefixedSelector, filePath, rule) {
      //       if (selector.match(/^(:root|:host)/)) {
      //         return selector.replace(/^([^\s]*)/, `$1 ${prefix}`);
      //       }
      //
      //       if (filePath.match(/vue2/)) {
      //         return selector; // Do not prefix styles imported from node_modules
      //       }
      //
      //       const annotation = rule.prev();
      //       if (annotation?.type === 'comment' && annotation.text.trim() === 'no-prefix') {
      //         return selector; // Do not prefix style rules that are preceded by: /* no-prefix */
      //       }
      //
      //       return prefixedSelector;
      //     },
      //   }),
      //   autoprefixer({}),
      // ],
    }
  }

})

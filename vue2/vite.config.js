import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue2'
import federation from "@originjs/vite-plugin-federation";
import prefixer from 'postcss-prefix-selector';
import autoprefixer from 'autoprefixer';

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
    }),
  ],
  css: {
    postcss: {
      plugins: [
        prefixer({
          prefix: '#app-vue2',
          transform(prefix, selector, prefixedSelector, filePath, rule) {
            // if (selector.match(/^(html|body)/)) {
            //   return selector.replace(/^([^\s]*)/, `$1 ${prefix}`);
            // }

            if (filePath.match(/node_modules/)) {
              return selector; // Do not prefix styles imported from node_modules
            }

            const annotation = rule.prev();
            if (annotation?.type === 'comment' && annotation.text.trim() === 'no-prefix') {
              return selector; // Do not prefix style rules that are preceded by: /* no-prefix */
            }

            return prefixedSelector;
          },
        }),

        autoprefixer({}) // add options if needed
      ],
    }
  },
  server: {
    port: 5001,
  },
})

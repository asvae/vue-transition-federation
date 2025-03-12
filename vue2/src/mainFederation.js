import 'bootstrap/dist/css/bootstrap.min.css';

import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import { routes } from './routes'
import { reactiveState } from './reactiveState'

export default {
  createVue2App: (selector, routes) => {
    Vue.config.productionTip = false
    Vue.use(Router);

    const router = new Router({
      mode: 'abstract',
      routes,
    });

    new Vue({
      router,
      render: h => h(App),
    }).$mount(selector)

    return router
  },
  routes,
  reactiveState: reactiveState,
}

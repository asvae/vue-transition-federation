import 'bootstrap/dist/css/bootstrap.min.css';

import Vue from 'vue'
import App from './App.vue'
import router from './router';

export default {createVue2App: (selector= '') => {
  Vue.config.productionTip = false

  new Vue({
    router,
    render: h => h(App),
  }).$mount(selector)
}}

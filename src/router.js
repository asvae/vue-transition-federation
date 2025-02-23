import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',  // Use the HTML5 history mode
  routes: [
    {
      path: '/',
      name: 'UserDashboard',
      component: () => import('./UserDashboard.vue')
    },
    {
      path: '/product',
      name: 'ProductPage',
      component: () => import('./ProductPage.vue')
    },
  ]
});

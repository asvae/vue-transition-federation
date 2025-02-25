import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
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

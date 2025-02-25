import { createMemoryHistory, createRouter } from 'vue-router'

export default new createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./Vue2App.vue')
    },
  ]
});

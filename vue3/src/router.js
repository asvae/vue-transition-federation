import { createRouter, createWebHistory } from 'vue-router'
import main from 'remote_app/mainFederation.js'

const vue2Routes = main.routes.map(route => {
  return {
    ...route,
    component: () => import('./Vue2App.vue'),
  }
})

export default new createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/page1',
      component: () => import('./pages/Page1.vue')
    },
    // {
    //   path: '/page2',
    //   component: () => import('./pages/Page2.vue')
    // },
    // {
    //   path: '/page3',
    //   component: () => import('./pages/Page3.vue')
    // },
    ...vue2Routes,
  ]
});

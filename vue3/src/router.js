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
    ...vue2Routes,
  ]
});

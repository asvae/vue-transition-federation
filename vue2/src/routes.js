export const routes =[
  {
    path: '/page1',
    component: () => import('./pages/Page1.vue')
  },
  {
    path: '/page2',
    component: () => import('./pages/Page2.vue')
  },
  {
    path: '/page3',
    component: () => import('./pages/Page3.vue')
  },
]

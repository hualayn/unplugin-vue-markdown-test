// index.js
import { createRouter, createWebHistory } from 'vue-router'
import MyView from '../views/MyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MyView,
    },
    {
      path: '/one',
      component: () => import('../pages/one.md'),
      children: [
        {
          path: 'sub-a',
          component: () => import("../pages/one-sub-a.md")
        },
        {
          path: 'sub-b',
          component: () => import("../pages/one-sub-b.md")
        }
      ]
    },
    {
      path: '/two',
      component: () => import('../pages/two.md')
    },
  ],
})

export default router

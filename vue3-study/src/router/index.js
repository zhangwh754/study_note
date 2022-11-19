import { createRouter, createWebHistory } from 'vue-router'
import { autoRoutes } from '../utils/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/1-Reactivity'
    },
    ...autoRoutes
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import InitialPage from '@/views/InitialPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'InitialPage',
      path: '/',
      component: InitialPage
    },
    {
      name: 'Coins',
      path: '/coins',
      component: () => import('@/views/Coins.vue')
    },
    {
      name: 'CoinDetails',
      path: '/coin/:uuid',
      component: () => import('@/views/CoinDetails.vue')
    }
  ]
})

export default router

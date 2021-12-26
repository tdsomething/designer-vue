import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { preViewRoutes } from './previewRoutes'

// const routes = []

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: HomeView,
      children: preViewRoutes
    }
  ]
})

import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import { ROUTE } from '@/common/routes'
import { AuthController } from '@/common/middlewares'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default-layout',
      component: () => import('@/layouts/DefaultLayout.vue'),
      children: [
        {
          path: ROUTE.home,
          name: 'home',
          component: Home
        },
        {
          path: ROUTE.about,
          name: 'about',
          component: () => import('@/views/AboutView.vue')
        }
      ]
    },
    {
      path: '/auth',
      name: 'auth-layout',
      component: () => import('@/layouts/AuthLayout.vue'),
      beforeEnter: [AuthController],
      children: [
        {
          path: ROUTE.login,
          name: 'login',
          component: () => import('@/views/auth/LoginView.vue')
        },
        {
          path: ROUTE.register,
          name: 'register',
          component: () => import('@/views/auth/RegisterView.vue')
        }
      ]
    }
  ]
})

export default router

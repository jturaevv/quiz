import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import { ROUTE } from '@/common/routes'
import { AuthController, AuthGuard, DefaultController, ProfileController } from '@/common/middlewares'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default-layout',
      component: () => import('@/layouts/DefaultLayout.vue'),
      beforeEnter: [DefaultController],
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
      path: ROUTE.authIndex,
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
    },
    {
      path: ROUTE.profileIndex,
      name: 'profile-layout',
      component: () => import('@/layouts/ProfileLayout.vue'),
      beforeEnter: [ProfileController],
      children: [
        {
          path: ROUTE.dashboard,
          name: 'dashboard',
          component: () => import('@/views/profile/DashboardView.vue'),
          beforeEnter: [AuthGuard]
        },
        {
          path: ROUTE.settings,
          name: 'settings',
          component: () => import('@/views/profile/SettingsView.vue'),
          beforeEnter: [AuthGuard]
        },
      ]
    }
  ]
})

export default router

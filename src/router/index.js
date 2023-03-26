import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: 'films',
        name: 'films',
        component: () => import('../views/FilmsView.vue')
      },
      {
        path: 'filmsOne',
        name: 'filmsOne',
        component: () => import('../views/FilmsOneView.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

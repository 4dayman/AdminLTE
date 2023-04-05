import { createRouter, createWebHashHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

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
        path: 'baner',
        name: 'baner',
        component: () => import('../views/BanerView.vue')
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
      {
        path: 'cinemas',
        name: 'cinemas',
        component: () => import('../views/CinemasView.vue')
      },
      {
        path: 'cinemasOne',
        name: 'cinemasOne',
        component: () => import('../views/CinemasOneView.vue')
      },
      {
        path: 'hallCard',
        name: 'hallCard',
        component: () => import('../views/HallCardView.vue')
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('../views/NewsView.vue')
      },
      {
        path: 'newsOne',
        name: 'newsOne',
        component: () => import('../views/NewsOneView.vue')
      },
      {
        path: 'prom',
        name: 'prom',
        component: () => import('../views/PromView.vue')
      },
      {
        path: 'promOne',
        name: 'promOne',
        component: () => import('../views/PromOneView.vue')
      },
      {
        path: 'promOne',
        name: 'promOne',
        component: () => import('../views/PromOneView.vue')
      },
      {
        path: 'pages',
        name: 'pages',
        component: () => import('../views/PagesView.vue')
      },
      {
        path: 'pagesMain',
        name: 'pagesMain',
        component: () => import('../views/PagesMainView.vue')
      },
      {
        path: 'pagesAbout',
        name: 'pagesAbout',
        component: () => import('../views/PagesAboutView.vue')
      },
      {
        path: 'pagesCafe',
        name: 'pagesCafe',
        component: () => import('../views/PagesCafeView.vue')
      },
      {
        path: 'pagesVip',
        name: 'pagesVip',
        component: () => import('../views/PagesVipView.vue')
      },
      {
        path: 'pagesComers',
        name: 'pagesComers',
        component: () => import('../views/PagesComersView.vue')
      },
      {
        path: 'pagesKids',
        name: 'pagesKids',
        component: () => import('../views/PagesKidsView.vue')
      },
      {
        path: 'pagesContacts',
        name: 'pagesContacts',
        component: () => import('../views/PagesContactsView.vue')
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('../views/UserView.vue')
      },
      {
        path: 'userEdit',
        name: 'userEdit',
        component: () => import('../views/UserEditView.vue')
      },
      {
        path: 'mailing',
        name: 'mailing',
        component: () => import('../views/MailingView.vue')
      },
      {
        path: 'mailingChoice',
        name: 'mailingChoice',
        component: () => import('../views/MailingChoiceView.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router

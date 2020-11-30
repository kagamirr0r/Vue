import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/containers/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: () => import('../views/containers/Calculator.vue')
  },
  {
    path: '/api',
    name: 'Api',
    component: () => import('../views/containers/Api.vue')
  },
  {
    path: '/counter',
    name: 'Counter',
    component: () => import('../views/containers/Counter.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

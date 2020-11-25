import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/containers/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/containers/About.vue')
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
 {
    path: '/',
    name: 'homePage',
    component: HomeView
  },
  {
    path: '/destination',
    name: 'DestinationPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DestinationPage" */ '../views/destination/DestinationPage.vue')
  },
  {
    path: '/crew',
    name: 'CrewPage',
    component: () => import('../views/CrewPage.vue')
  },
  {
    path: '/technology',
    name: 'TechnologyPage',
    component: () => import('../views/TechnologyPage.vue')

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router




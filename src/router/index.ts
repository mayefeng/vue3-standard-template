import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Demo',
    component: () => import(/* webpackChunkName: "about" */ '@/pages/Demo')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'

import WeekView from './views/WeekView'
import OneDayView from './views/OneDayView'

const routes = [
  {path: '/one-day', component: OneDayView},
  {path: '/week', component: WeekView}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'bg-blue-600 font-bold text-white'
})

export default router

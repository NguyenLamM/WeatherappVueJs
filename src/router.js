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
  linkActiveClass: 'pb-4 border-b-2'
})

export default router

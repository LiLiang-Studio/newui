import { createRouter, createWebHashHistory } from 'vue-router'

const modules = import.meta.glob('../views/pages/*.vue')

/** @type {import('vue-router').RouteRecordRaw[]} */
export const routes = Object.keys(modules).map(k => {
  return {
    path: k.split('/').pop().split('.')[0].toLowerCase(),
    component: modules[k]
  }
})

export default createRouter({
  history: createWebHashHistory('/newui/'),
  routes: [
    {
      path: '/',
      component: () => import('../views/Home.vue'),
      children: [
        {
          path: '',
          redirect: routes[0].path
        },
        ...routes
      ]
    }
  ]
})

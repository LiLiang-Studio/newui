import { createRouter, createWebHashHistory } from 'vue-router'

/** @type {import('vue-router').RouteRecordRaw[]} */
export const routes = [
  {
    path: 'link',
    component: () => import('../views/Link.vue')
  },
  {
    path: 'alert',
    component: () => import('../views/Alert.vue')
  },
  {
    path: 'layout',
    component: () => import('../views/Layout.vue')
  },
  {
    path: 'avatar',
    component: () => import('../views/Avatar.vue')
  },
  {
    path: 'divider',
    component: () => import('../views/Divider.vue')
  }
]

export default createRouter({
  history: createWebHashHistory(),
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

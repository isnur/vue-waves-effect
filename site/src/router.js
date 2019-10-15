import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/setup',
      name: 'setup',
      component: () => import(/* webpackChunkName: "setup" */ '@/views/setup.vue')
    },
    {
      path: '/usage',
      name: 'usage',
      component: () => import(/* webpackChunkName: "usage" */ '@/views/usage.vue')
    }
  ]
})

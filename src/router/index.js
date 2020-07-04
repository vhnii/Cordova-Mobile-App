import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/btc',
    name: 'btc',
    props: true,
    component: () => import('../components/btc.vue')
  },
  {
    path: '/eth',
    name: 'eth',
    props: true,
    component: () => import('../components/eth.vue')
  },
  {
    path: '/ltc',
    name: 'ltc',
    props: true,
    component: () => import('../components/ltc.vue')
  },
  {
    path: '/xrp',
    name: 'xrp',
    props: true,
    component: () => import('../components/xrp.vue')
  },
  {
    path: '/xlm',
    name: 'xlm',
    props: true,
    component: () => import('../components/xlm.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

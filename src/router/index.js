import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../page/Home.vue'
import About from '../page/About.vue'
import Products from '../page/Products'
import Buy from '../page/Buy'
import User from '../page/User'
import SignUp from '../page/SignUp'
import Layout from '../components/Layout.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: '',
    component: Layout,
    children: [{
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: '/about',
        name: 'about',
        component: About
      },
      {
        path: '/products',
        name: 'products',
        component: Products
      },
      {
        path: '/buy',
        name: 'buy',
        component: Buy
      },
      {
        path: '/user',
        name: 'user',
        component: User
      },
    ]
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUp
  },
  {
    path: '*',
    redirect: {
      name: 'home'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

export default router
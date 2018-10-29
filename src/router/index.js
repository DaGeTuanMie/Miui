import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Newtip from '@/pages/newtip/Newtip'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/newtip',
      name: 'Newtip',
      component: Newtip
    }
  ]
})

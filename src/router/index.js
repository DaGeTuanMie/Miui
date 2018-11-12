import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Newtip from '@/pages/newtip/Newtip'
import Section from '@/pages/section/Section'
import Zone from '@/pages/zone/Zone'
import Club from '@/pages/club/Club'
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
    },
    {
      path:'/section',
      name:'Section',
      component:Section
    },
    {
      path:'/zone',
      name:'Zone',
      component:Zone
    },
    {
      path:'/club',
      name:'Club',
      component:Club
    }
  ]
})

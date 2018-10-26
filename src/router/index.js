import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/pages/LandingPage'
import AboutUs from '@/pages/AboutUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    }
  ]
})

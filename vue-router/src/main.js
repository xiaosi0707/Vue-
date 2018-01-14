// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Home from '@/components/home'
import Document from '@/components/document'
import About from '@/components/about'
import Study from '@/components/child/study'
import Work from '@/components/child/work'
import Like from '@/components/child/like'
import User from '@/components/user'
// import noFound from '@/components/nofound'
import VueRouter from 'vue-router'
import '@/assets/css/app.css'

Vue.use(VueRouter)

var router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/document',
      name: 'Document',
      component: Document
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      children: [
        {
          path: '',
          component: Study
        },
        {
          path: '/about/work',
          component: Work
        },
        {
          path: '/about/like',
          component: Like
        }
      ]
    },
    {
      path: '/user/:userId?',
      component: User
    },
    {
      path: '*',
      name: 'Home',
      component: Home
    }
  ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

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
import Login from '@/components/login'
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
      component: Home,
      meta: {
        title: 'home'
      }
    },
    {
      path: '/document',
      name: 'Document',
      component: Document,
      meta: {
        title: 'document'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      children: [
        {
          path: '',
          component: Study,
          meta: {
            title: 'study'
          }
        },
        {
          path: '/about/work',
          component: Work,
          meta: {
            title: 'work'
          }
        },
        {
          path: '/about/like',
          component: Like
        }
      ]
    },
    {
      path: '/user/:userId?',
      component: User,
      meta: {
        title: 'user',
        login: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      name: 'Home',
      component: Home
    }
  ]
})

// 全局钩子函数
router.beforeEach((to, from, next) => {
  if (to.meta.login) {
    next('/login')
  } else {
    next()
  }
})
// 全局钩子函数
router.afterEach((to, from) => {
  console.log(to, from)
  if (to.meta.title) {
    window.document.title = to.meta.title
  } else {
    window.document.title = '1704D'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

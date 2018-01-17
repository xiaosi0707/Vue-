import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import detail from '@/components/detail'
import userCenter from '@/components/user-center'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/detail/:id?',
      name: 'detail',
      component: detail
    },
    {
      path: '/userCenter/:userName?',
      name: 'userCenter',
      component: userCenter
    }
  ]
})

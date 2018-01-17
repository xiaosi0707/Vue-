import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import detail from '@/components/detail'
import userCenter from '@/components/user-center'
import collectionList from '@/components/collection-list'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        title: 'CNode：Node.js专业中文社区'
      }
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
    },
    {
      path: '/collectionList/:userName?',
      name: 'collectionList',
      component: collectionList
    }
  ]
})

router.afterEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
})

export default router

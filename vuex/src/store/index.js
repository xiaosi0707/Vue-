import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    title: 'Hello',
    list: [],
    isShow: false
  },
  mutations: {
    changeList (state, actionData) {
      this.state.list = actionData
    },
    changeTitle (state, str) {
      this.state.title = str
    },
    changeShow (state) {
      this.state.isShow = !this.state.isShow
    }
  },
  actions: {
    getListAction (context) {
      axios.get('https://www.easy-mock.com/mock/5a66937bf965701ee25e927b/axios/list').then((res) => {
        context.commit('changeList', res.data.data)
      }).catch((err) => {
        alert(err)
      })
    }
  }
})

export default store

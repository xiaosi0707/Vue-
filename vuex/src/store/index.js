import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    title: 'hello',
    list: [
      {
        title: 'javascript'
      },
      {
        title: 'html+css'
      },
      {
        title: 'jQuery'
      }
    ],
    listShow: false
  },
  mutations: {
    changeTitle (state, val) {
      state.title = val
    },
    changeShow (state) {
      state.listShow = !state.listShow
    }
  }
})

export default store

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    count: 100
  },
  mutations: {
    addIncrement (state, payLoad) {
      this.state.count += payLoad.n
    },
    deIncrement (state, n) {
      this.state.count -= 2
    }
  }
})

export default store

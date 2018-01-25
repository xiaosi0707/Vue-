import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    count: 100
  },
  mutations: {
    addIncrement (state) {
      this.state.count++
    },
    deIncrement (state) {
      this.state.count--
    }
  }
})

export default store

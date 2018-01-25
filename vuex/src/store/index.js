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
  },
  actions: {
    addAction (context) {
      setTimeout(() => {
        context.commit('addIncrement', {n: 5})
        context.dispatch('otherAction', {text: '测试'})
      }, 1000)
    },
    otherAction (context, obj) {
      console.log(obj)
    }
  }
})

export default store

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    count: 100
  },
  getters: {
    filterCount (state) {
      return state.count > 120 ? 120 : state.count
    }
  },
  // 同步
  mutations: { // 想要改变数据必须得通过commit提交一个mutation才可以，这是改变数据的唯一途径
    addIncrement (state, payLoad) {
      state.count += payLoad.n
    },
    deIncrement (state) {
      state.count--
    }
  },
  // 异步
  actions: {
    addAction (context) {
      setTimeout(() => {
        context.commit('addIncrement', {n: 5})
      }, 1000)
    }
  }
})

export default store

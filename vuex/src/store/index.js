import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    val: '',
    list: [
      {
        'name': '熊大',
        'like': '靠谱'
      },
      {
        'name': '熊二',
        'like': '懒惰'
      },
      {
        'name': '光头强',
        'like': '孝顺'
      }
    ],
    isShow: false
  },
  mutations: {
    changeVal (state, payLoad) {
      console.log(payLoad)
      this.state.val = payLoad.name
    },
    changeShow (state) {
      this.state.isShow = !this.state.isShow
    }
  }
})

export default store

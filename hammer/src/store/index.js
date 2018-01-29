import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    carShow: false,
    shopCartData: []
  },
  getters: {
    totalPriceGetter (state) {
      let total = 0
      state.shopCartData.map((item) => {
        total += item.price
      })
      return total
    }
  },
  mutations: {
    showCar (state) {
      state.carShow = true
    },
    hideCar (state) {
      state.carShow = false
    },
    addShopCartData (state, goods) {
      state.shopCartData.push(goods)
    }
  }
})

export default store

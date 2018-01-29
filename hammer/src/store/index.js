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
        total += item.price * item.count
      })
      return total
    },
    totalNumGetter (state) {
      let total = 0
      state.shopCartData.map((goods) => {
        total += goods.count
      })
      return parseInt(total)
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
      let flag = true
      state.shopCartData.map((item) => {
        if (item.sku_id === goods.sku_id) {
          goods.count += 1
          flag = false
        }
      })
      if (flag) {
        Vue.set(goods, 'count', 1)
        state.shopCartData.push(goods)
      }
      // if (state.shopCartData.length > 0) {
      //   state.shopCartData.map((item) => {
      //     if (item.sku_id === goods.sku_id) {
      //       console.log('已存在')
      //       goods.count++
      //     } else {
      //       // state.shopCartData.push(goods)
      //     }
      //   })
      // }
    }
  }
})

export default store

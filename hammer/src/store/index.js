import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    carShow: false,
    shopCartData: [],
    checked: true,
    addressPopShow: false
  },
  getters: {
    totalPriceGetter (state) {
      let total = 0
      state.shopCartData.map((goods) => {
        if (goods.checked) total += goods.price * goods.count
      })
      return total
    },
    totalNumGetter (state) {
      let total = 0
      state.shopCartData.map((goods) => {
        if (goods.checked) total += goods.count
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
          // goods.count += 1 // bug：最初给goods（传递进来的数据）count+1了，这样有一个问题：当我在list添加商品到购物车，然后再到详情页加入同样sku的商品到购物车，商品数量并未累加。原因：list和detail传递进来的对象并不一样，第一次list加入的时候添加了count值，当我进入detail加入的时候判断此sku_id已存在，那么就不加入购物车了，而是累加count但是此时传递进来的goods对象上面并没有count值（count值是设置在list传递进来的对象身上的），所以list首次加入的商品在detail加入购物车count（数量）值并未累加
          item.count += 1
          flag = false
        }
      })
      if (flag) {
        Vue.set(goods, 'count', 1)
        Vue.set(goods, 'checked', true)
        state.shopCartData.push(goods)
      }
    },
    removeShopCartData (state, goods) {
      state.shopCartData.filter((item, index) => {
        if (item.sku_id === goods.sku_id) {
          state.shopCartData.splice(index, 1)
        }
      })
    },
    increment (state, goods) {
      state.shopCartData.filter((item, index) => {
        if (item.sku_id === goods.sku_id) {
          Vue.set(item, item.count++)
        }
      })
    },
    goodsChecked (state, goods) {
      state.shopCartData.filter((item, index) => {
        if (item.sku_id === goods.sku_id) {
          Vue.set(item, 'checked', !item.checked)
        }
        if (!goods.checked) {
          state.checked = false
        }
      })
    },
    allChecked (state) {
      if (!state.checked) {
        state.shopCartData.filter((item) => {
          Vue.set(item, 'checked', true)
        })
        state.checked = true
      } else {
        state.checked = !state.checked
        state.shopCartData.filter((item) => {
          Vue.set(item, 'checked', !item.checked)
        })
      }
    },
    showAddressPop (state) {
      state.addressPopShow = true
    },
    hideAddressPop (state) {
      state.addressPopShow = false
    }
  }
})

export default store

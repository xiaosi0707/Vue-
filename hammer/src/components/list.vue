<template>
  <div>
    <app-header></app-header>
    <div id="main">
      <div class="sku-box store-content">
        <div class="sort-option">
          <ul class="line clear">
            <li><a href="javascript:;" class="active">综合排序</a></li>
            <li><a href="javascript:;" class="">销量排序</a></li>
            <li><a href="javascript:;" class="">价格低到高</a></li>
            <li><a href="javascript:;" class="" @click="sortMaxToMin">价格高到低</a></li>
          </ul>
        </div>
        <div class="gray-box">
          <div class="item-box">
        <goods-item v-for="(item, index) in sGoodsData" :key="index" :goodsItemData="item" ></goods-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from './header'
import goodsItem from './goods-item'
export default {
  components: {
    goodsItem,
    appHeader
  },
  computed: {
    sGoodsData () {
      return this.$store.state.goodsData
    }
  },
  created () {
    this.$store.dispatch('aGetGoodsData')
  },
  methods: {
    sortMaxToMin () {
      console.log(this.goodsData)
    }
  }
}
</script>

<style scoped>

</style>

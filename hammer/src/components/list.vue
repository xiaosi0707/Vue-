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
            <li><a href="javascript:;" class="">价格高到低</a></li>
          </ul>
        </div>
        <goods-item></goods-item>
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
  }
}
</script>

<style scoped>

</style>

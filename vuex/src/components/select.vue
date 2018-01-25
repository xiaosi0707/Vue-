<template>
  <section class="warp">
    <div class="searchIpt clearFix">
    <select-input :inputData="title" :is-show.sync="listShow"></select-input>
    <list :list="listData" @parentReceive="parentHandle" v-show="listShow"></list>
    </div>
  </section>
</template>

<script>
import selectInput from './input'
import list from './list'
let listData = [
  {
    title: '熊大'
  },
  {
    title: '熊二'
  },
  {
    title: '光头强'
  }
]
export default {
  components: {
    list,
    selectInput
  },
  data () {
    return {
      listData,
      title: '',
      listShow: false
    }
  },
  methods: {
    parentHandle (obj) {
      this.title = obj.title
      this.listShow = false
    }
  }
}
</script>

<style>

</style>

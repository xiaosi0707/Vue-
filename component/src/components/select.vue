<template>
  <div class="select">
    <app-input :select-btn-val="mainBtnVal" :val="val" @parentChangeShow="changeShowHandle"></app-input>
    <app-list :selectList = 'list' @parentReceive="parentChange" @parentChange="listChangeShow" v-show="isShow"></app-list>
  </div>
</template>

<script>
import appInput from './input'
import appList from './list'

export default {
  props: ['mainBtnVal', 'list'],
  components: {
    appInput,
    appList
  },
  data () {
    return {
      val: '',
      isShow: false
    }
  },
  methods: {
    parentChange (obj) {
      this.val = obj.name
    },
    changeShowHandle () {
      this.isShow = !this.isShow
    },
    listChangeShow () {
      this.isShow = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.select {
  width: 500px;
  margin: 50px auto;
  overflow: hidden;
}
</style>

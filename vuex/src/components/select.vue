<template>
  <section class="warp">
    <div class="searchIpt clearFix">
    <select-input></select-input>
    <list v-show="isShow"></list>
    </div>
  </section>
</template>

<script>
import selectInput from './input'
import list from './list'
export default {
  components: {
    selectInput,
    list
  },
  computed: {
    isShow () {
      return this.$store.state.listShow
    }
  }
}
</script>

<style>

</style>

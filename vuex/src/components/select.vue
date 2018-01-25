<template>
  <section class="warp">
    <div class="searchIpt clearFix">
    <select-input ></select-input>
    <list v-show=show></list>
    </div>
  </section>
</template>

<script>
import selectInput from './input'
import list from './list'
export default {
  components: {
    list,
    selectInput
  },
  computed: {
    show () {
      return this.$store.state.isShow
    }
  }
}
</script>

<style>

</style>

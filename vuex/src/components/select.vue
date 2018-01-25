<template>
  <div class="select">
    <app-input></app-input>
    <app-list v-show="listShow"></app-list>
  </div>
</template>

<script>
import appInput from './input'
import appList from './list'

export default {
  components: {
    appInput,
    appList
  },
  computed: {
    listShow () {
      return this.$store.state.isShow
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

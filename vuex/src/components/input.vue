<template>
  <div class="clearFix">
    <input type="text" class="keyWord" :value="initTitle" @click="inputShow">
    <input type="button" value="GO">
    <span></span>
  </div>
</template>

<script>
export default {
  computed: {
    initTitle () {
      return this.$store.state.title
    }
  },
  methods: {
    inputShow () {
      this.$store.commit('changeShow')
    }
  }
}
</script>

<style scoped>

</style>

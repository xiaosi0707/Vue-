<template>
    <div class="clearFix">
      <input type="text" class="keyWord" :value="title" @click="showHandle">
      <input type="button" value="GO">
      <span></span>
    </div>
</template>

<script>
export default {
  computed: {
    title () {
      return this.$store.state.title
    }
  },
  methods: {
    showHandle () {
      this.$store.commit('changeShow')
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <ul class="list">
    <li v-for="(item, key, index) in list" :key="index" @click="getTitle(item.title)">{{item.title}}</li>
  </ul>
</template>

<script>
export default {
  computed: {
    list () {
      return this.$store.state.list
    }
  },
  methods: {
    getTitle (str) {
      this.$store.commit('changeTitle', str)
      this.$store.commit('changeShow')
    }
  }
}
</script>

<style scoped>

</style>

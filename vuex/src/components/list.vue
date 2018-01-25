<template>
<div>
  <ul class="list">
    <li v-for="(item,key,index) in data" :key="index" @click="getTitle(item)">{{item}}</li>
  </ul>
</div>
</template>

<script>
export default {
  computed: {
    data () {
      return this.$store.state.list
    }
  },
  methods: {
    getTitle (val) {
      this.$store.commit('changeTitle', val)
      this.$store.commit('changeShow')
    }
  },
  created () {
    this.$store.dispatch('getListAction')
  }
}
</script>

<style scoped>

</style>

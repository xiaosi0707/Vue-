<template>
<div>
  <ul class="list">
    <li v-for="(item,key,index) in list" :key="index" @click="selectChild(item)">{{item.title}}</li>
  </ul>
</div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array
    }
  },
  methods: {
    selectChild (obj) {
      this.$emit('parentReceive', obj)
    }
  }
}
</script>

<style scoped>

</style>

<template>
    <div class="list">
      <ul>
        <li v-for="(item, index) in selectList" :key="index" @click="getVal(item)">{{ item.name }}</li>
      </ul>
    </div>
</template>

<script>
export default {
  computed: {
    selectList () {
      return this.$store.state.list
    }
  },
  methods: {
    getVal (obj) {
      this.$store.commit('changeVal', obj)
    }
  }
}
</script>

<style scoped>
  .list {
    float: left;
    overflow: hidden;
    line-height: 24px;
  }
  .list li {
    height: 32px;
    line-height: 32px;
  }
</style>

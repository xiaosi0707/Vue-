<template>
    <div class="list">
      <ul>
        <li v-for="(item, index) in selectList" :key="index" @click="selectChild(item)" @mouseup="listChange">{{ item.name }}</li>
      </ul>
    </div>
</template>

<script>
export default {
  props: ['selectList', 'flag'],
  methods: {
    selectChild (obj) {
      this.$emit('parentReceive', obj)
    },
    listChange () {
      this.$emit('parentChange')
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

<template>
    <div class="clearFix">
      <input type="text" class="keyWord" :value="inputData" @click="showChild">
      <input type="button" value="GO">
      <span></span>
    </div>
</template>

<script>
export default {
  props: {
    inputData: {
      type: String
    },
    isShow: {
      type: Boolean
    }
  },
  computed: {
    initShow () {
      return this.isShow
    }
  },
  methods: {
    showChild () {
      this.$emit('update:isShow', !this.initShow)
    }
  }
}
</script>

<style scoped>

</style>

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
    }
  },
  methods: {
    showChild () {
      this.$emit('parentInputReceive')
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="input">
    <input type="text" placeholder="请输入搜索内容" :value="val" @click="changeIsShow"/><button>{{ selectBtnVal }}</button>
  </div>
</template>

<script>
export default {
  props: ['selectBtnVal', 'val'],
  created () {
  },
  methods: {
    changeIsShow () {
      this.$emit('parentChangeShow')
    }
  }
}
</script>

<style scoped>
  .input {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;

  }
  .input input{
    width: 200px;
    height: 32px;
    float: left;
  }
  .input button {
    width: 120px;
    height: 36px;
    float: left;
  }
</style>

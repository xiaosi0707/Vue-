<template>
  <div>
    <h2>简易加法计算器</h2>
    <input type="button" value="-" @click="delHandle">
    <span>{{ num }}</span>
    <input type="button" value="+" @click="addHandle">
    <p>{{ mum1 }}</p>
    <div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    num () {
      return this.$store.state.count
    },
    mum1 () {
      return this.$store.getters.filterCount
    }
  },
  methods: {
    addHandle () {
      // this.$store.commit('addIncrement', {
      //   n: 5
      // }) // 通过commit提交mutation
      this.$store.dispatch('addAction') // 通过dispatch来触发action
    },
    delHandle () {
      this.$store.commit('deIncrement') // 通过commit提交mutation
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

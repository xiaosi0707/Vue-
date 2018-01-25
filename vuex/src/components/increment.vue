<template>
  <div>
    <h2>简易加法计算器</h2>
    <div>
      <input type="button" value="-" @click="deHandle">
      <span>{{num}}</span>
      <input type="button" value="+" @click="addHandle">
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    num () {
      return this.$store.state.count
    }
  },
  methods: {
    addHandle () {
      this.$store.commit('addIncrement', {
        n: 5
      })
    },
    deHandle () {
      this.$store.commit({
        type: 'deIncrement',
        n: 2
      })
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

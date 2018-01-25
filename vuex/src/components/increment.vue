<template>
  <div>
    <h2>简易加法计算器</h2>
    <div>
      <input type="button" value="-" @click="deHandle">
      <span>{{num}}</span>
      <input type="button" value="+" @click="addHandle">
      <p>
        <span>{{num1}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    num () {
      return this.$store.state.count
    },
    num1 () {
      return this.$store.getters.filterCount
    }
  },
  methods: {
    addHandle () {
      this.$store.commit('addIncrement', {
        n: 5
      })
      // this.$store.dispatch('addAction')
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

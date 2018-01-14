<template>
  <div>
    <div>
      关于我们{{ test }}
      <hr>
      <ul class="nav">
        <router-link to="/about" tag="li" exact>study</router-link>
        <router-link to="/about/work" tag="li">work</router-link>
        <router-link to="/about/like" tag="li">like</router-link>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        test: '改变前'
      }
    },
    beforeRouteEnter (to, from, next) {
      console.log('beforeRouteEnter')
      console.dir(this)
      next((vm) => {
        vm.test = '改变了'
      })
    },
    beforeRouteUpdate (to, from, next) {
      console.log('beforeRouteUpdate')
      console.dir(this)
      next()
    },
    beforeRouteLeave (to, from, next) {
      console.log('beforeRouteLeave')
      console.dir(this)
      next()
    }
  }
</script>

<style scoped>

</style>

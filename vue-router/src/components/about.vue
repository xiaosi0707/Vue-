<template>
  <div>


    <div>
      关于我们
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

</script>

<style scoped>

</style>

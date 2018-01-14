<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
        <li>
          <router-link to="/" exact="">home</router-link>
        </li>
        <li>
          <router-link to="/document" event="mouseover">document</router-link>
        </li>
        <li>
          <router-link to="/about">about</router-link>
        </li>
        <li>
          <router-link to="/user">user</router-link>
        </li>

      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>

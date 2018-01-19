<template>
  <div id="app">
    <v-header></v-header>
    <transition name="fade">
      <router-view ></router-view>
    </transition>
    <vue-loading type="bars" color="#80BD01" v-show="isLoading" :size="{ width: '50px', height: '50px' }"></vue-loading>
  </div>
</template>

<script>
import header from '@/components/header'
import vueLoading from 'vue-loading-template'
// import '@/config/interceptors'
export default {
  components: {
    'v-header': header,
    vueLoading
  },
  data () {
    return {
      isLoading: false
    }
  }
}

</script>

<style type="text/css">
  .router {
    position: absolute;
    top: 50px;
    left: 70px;
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-to {
    opacity: 1;
  }
  .fade-enter-active {
    -webkit-transition: 1s;
  }
  .fade-leave {
    opacity: 1;
  }
  .fade-leave-to {
    opacity: 0;
  }
  .fade-leave-active {
    -webkit-transition: 1s;
  }
</style>

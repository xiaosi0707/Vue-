<template>
  <div class="navbar">
    <div class="navbar-inner">
      <a href="" class="logo">
        <img src="../assets/imgs/cnodejs_light.svg" alt="">
      </a>
      <form class="search">
        <input type="text">
        <img src="../assets/imgs/search.e53b380a.hashed.png" alt="">
      </form>
      <nav class="nav">
        <a href="">首页</a>
        <a href="">新手入门</a>
        <a href="">API</a>
        <a href="">关于</a>
        <a href="">注册</a>
        <a href="">登陆</a>
      </nav>
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .navbar {
    width: 100%;
    height: 50px;
    background: #444444;
    .navbar-inner {
      width: 90%;
      height: 50px;
      margin: 0 auto;
      .logo {
        display: inline-block;
        float: left;
        margin-top: 10px;
        width: 120px;
        height: 28px;
        img {
          width: 100%;
        }
      }
      .search {
        position: relative;
        float: left;
        margin-left: 20px;
        width: 234px;
        height: 28px;
        input {
          width: 100%;
          margin-top: 12px;
          height: 100%;
          background: #666;
          border-radius: 15px;
        }
        img {
          position: absolute;
          top: 18px;
          left: 5px;
        }
      }
      .nav {
        float: right;
        height: 50px;
        line-height: 50px;
        a {
          color: #ccc;
          font-size: 14px;
          padding: 0 15px;
        }
      }
    }
  }
</style>

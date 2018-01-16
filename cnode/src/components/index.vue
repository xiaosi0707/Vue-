<template>
  <div class="main">
    <div class="content">
      <div class="header">
        <a href="">全部</a>
        <a href="">精华</a>
        <a href="">分享</a>
        <a href="">问答</a>
        <a href="">招聘</a>
        <a href="">客户端测试</a>
      </div>
      <topic-list></topic-list>
    </div>
  </div>
</template>

<script>
import topicList from '@/components/topic-list'
export default {
  components: {
    topicList
  }
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .main {
    width: 90%;
    margin: 12px auto;
    overflow: hidden;
    .content {
      width: 1095px;
      float: left;
      background: white;
      .header {
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: left;
        background: #f6f6f6;
        a {
          color: #80BD01;
          margin: 0 12px;
          font-size: 14px;
        }
      }
    }
    .aside {
      float: right;
      overflow: hidden;
      width: 290px;
      .create-topic {
        width: 100%;
        height: 54px;
        line-height: 32px;
        background: white;
        margin-top: 24px;
        float: right;
        overflow: hidden;
        a {
          display: inline-block;
          width: 84px;
          height: 34px;
          background: #80BD01;
          color: white;
          font-size: 14px;
          margin-top: 12px;
          float: left;
          margin-left: 12px;
        }
      }
    }
  }
</style>

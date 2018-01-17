<template>
  <div class="main">
    <div class="content">
      <div class="header">
        <router-link to="/?tab=all">全部</router-link>
        <router-link to="/?tab=good">精华</router-link>
        <router-link to="/?tab=share">分享</router-link>
        <router-link to="/?tab=ask">问答</router-link>
        <router-link to="/?tab=job">招聘</router-link>
        <router-link to="/?tab=dev">客户端测试</router-link>
      </div>
      <topic-list :topicListData="topicListData"></topic-list>
    </div>
    <user-info user-name="xiaosi0707"></user-info>
  </div>
</template>

<script>
import topicList from '@/components/topic-list'
import userInfo from '@/components/user-info'
import axios from 'axios'
export default {
  components: {
    topicList,
    userInfo
  },
  data () {
    return {
      topicListData: []
    }
  },
  created () {
    this.getTopicData()
  },
  methods: {
    getTopicData () {
      let tab = this.$route.query.tab
      axios.get('https://cnodejs.org/api/v1/topics', {
        params: {
          page: 1,
          tab: tab,
          limit: 30
        }
      }).then((res) => {
        this.topicListData = res.data.data
      })
    }
  },
  watch: {
    $route () {
      this.getTopicData()
    }
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

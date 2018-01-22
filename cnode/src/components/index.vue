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
    <div class="aside">
      <user-info user-name="xiaosi0707"></user-info>
      <div class="create-topic">
        <router-link to="/createTopic">发布话题</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import topicList from '@/components/topic-list'
import userInfo from '@/components/user-info'
import axios from 'axios'
// import { AAA } from '@/config/global'
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
        document.title = tab + '版块 - CNode技术社区'
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
  .vue-loading {
    position: fixed;
    top: 50%;
    left: 50%;

  }
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
        margin-top: 12px;
        float: right;
        overflow: hidden;
        text-align: center;
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

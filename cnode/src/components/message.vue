<template>
  <div class="main">
    <div class="content">
      <msg-list title="新消息" :messageData="msgDataList.hasnot_read_messages"></msg-list>
      <msg-list title="过往信息" :messageData="msgDataList.has_read_messages"></msg-list>
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
import msgList from '@/components/msg-list'
import topicList from '@/components/topic-list'
import userInfo from '@/components/user-info'
import axios from 'axios'
export default {
  components: {
    topicList,
    userInfo,
    msgList
  },
  data () {
    return {
      msgDataList: []
    }
  },
  created () {
    axios.get(global.globalData.api + '/messages?accesstoken=' + global.globalData.token).then((res) => {
      this.msgDataList = res.data.data
    })
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

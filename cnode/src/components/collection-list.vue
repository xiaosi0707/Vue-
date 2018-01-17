<template>
    <div class="main">
      <div class="content">
        <div class="header">
          <span>{{ userName }}收藏的话题</span>
        </div>
        <topic-list :topicListData="collectionData"></topic-list>
      </div>
      <user-info :user-name="userName"></user-info>
    </div>
</template>

<script>
import axios from 'axios'
import topicList from '@/components/topic-list'
import userInfo from '@/components/user-info'
export default {
  components: {
    topicList,
    userInfo
  },
  data () {
    return {
      collectionData: [],
      userName: ''
    }
  },
  created () {
    let userNameQuery = this.$route.params.userName
    this.userName = userNameQuery
    axios.get('https://cnodejs.org/api/v1/topic_collect/' + userNameQuery).then((res) => {
      this.collectionData = res.data.data
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
    background: white;
  .header {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: left;
    background: #f6f6f6;
  span {
    color: #999999;
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

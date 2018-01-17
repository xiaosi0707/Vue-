<template>
  <div class="main">
    <div class="user-content">
      <div class="user-info">
        <div class="header"></div>
        <div class="user-info-content">
          <dl>
            <dt>
              <img :src="userCenterData.avatar_url" alt="">
            </dt>
            <dd>
              {{ userCenterData.loginname }}
            </dd>
          </dl>
          <p>
            积分： {{ userCenterData.score }}
          </p>
          <p>
            <router-link :to="{ name:'collectionList', params: { userName: userCenterData.loginname } }">{{ collectionNum.length }}个话题收藏</router-link>
          </p>
          <p>
            <span>注册时间{{ userCenterData.create_at }}</span>
          </p>
        </div>
      </div>
      <div class="new-create-topic">
        <div class="header"><span>最近创建的话题</span></div>
        <topic-list :topicListData="userCenterData.recent_topics"></topic-list>
      </div>
      <div class="new-create-topic">
        <div class="header"><span>最近参与的话题{{userCenterData.loginname}}</span></div>
        <topic-list :topicListData="userCenterData.recent_replies"></topic-list>
      </div>
    </div>
    <user-info :user-name="userCenterData.loginname"></user-info>
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
      userCenterData: {},
      collectionNum: []
    }
  },
  created () {
    let paramsUserName = this.$route.params.userName
    axios.get('https://cnodejs.org/api/v1/user/' + paramsUserName).then((res) => {
      this.userCenterData = res.data.data
      document.title = paramsUserName + '个人主页'
    })
    axios.get('https://cnodejs.org/api/v1/topic_collect/' + paramsUserName).then((res) => {
      this.collectionNum = res.data.data
    })
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .main {
    width: 90%;
    margin: 12px auto;
    overflow: hidden;
    .user-content {
      width: 1095px;
      float: left;
      padding-bottom: 12px;
      .user-info {
        width: 100%;
        overflow: hidden;
        background: white;
        .header {
          width: 100%;
          height: 40px;
          background: #f6f6f6;
        }
        .user-info-content {
          dl {
            width: 100%;
            text-align: left;
            overflow: hidden;
            dt {
              float: left;
              img {
                width: 48px;
                height: 48px;
                margin: 12px 12px 0;
              }
            }
            dd {
              float: left;
              margin-top: 24px;
              color: #778087;
            }
          }
          p{
            width:100%;
            text-align: left;
            float: left;
            margin-left: 12px;
            font-size: 13px;
            line-height: 24px;
            span {
              color: #ABABAB;
            }
            a {
              color: #778087;
            }
          }
        }
      }
      .new-create-topic {
        .list {
          width: 100%;
          overflow: hidden;
          background: white;
        }
        margin-top: 12px;
        .header {
          width: 100%;
          height: 40px;
          line-height: 40px;
          text-align: left;
          background: #f6f6f6;
          span {
            margin-left: 12px;
            font-size: 14px;
          }
        }
        .topic-list {
          background: white;
          .cell {
            width: 100%;
            height: 50px;
            line-height: 50px;
            border-bottom: 1px #F0F0F0 solid;
            .user-avatar {
              float: left;
              img {
                float: left;
                margin: 10px 12px 0;
                width: 30px;
                height: 30px;
                border-radius: 3px;
              }
              span{
                color: #888888;
              }
            }
            .title {
              float: left;
              margin-left: 24px;
              width: 800px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              text-align: left;
              a {
                color: #888888;
                &:hover {
                  text-decoration: underline;
                }
              }
            }
            .reply-avatar {
              float: right;
              margin-right: 12px;
              img {
                float: left;
                margin: 17px 10px 0 0;
                width: 18px;
                height: 18px;
                border-radius: 3px;
              }
              time {
                font-size: 12px;
                color: #778087;
              }
            }
          }
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

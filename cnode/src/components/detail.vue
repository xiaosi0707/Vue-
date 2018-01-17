<template>
  <div class="main">
    <div class="content">
      <div class="content-inner">
        <div class="detail-title"><span v-if="detailData.top">置顶</span>{{ detailData.title }}</div>
        <div class="title-msg">发布于8个月前·作者 {{ detailData.author.loginname }}·{{
          detailData.visit_count }} 次浏览·最后一次编辑是 5
          个月前·来自 分享
          <a href="javascript:;" :class="{active: isCollection}" @click="collection">{{ isCollection ? '取消收藏' : '收藏' }}</a>
          <!--<p>-->
            <!--<router-link :to="{path:'/edit', query: {id: detailData.id, loginname: detailData.author.loginname}}"-->
                         <!--tag="span">编辑-->
            <!--</router-link>-->
            <!--<span href="javascript:;">删除</span>-->
          <!--</p>-->
          </div>
        <div class="detail-content" v-html="detailData.content"></div>
      </div>
      <div class="detail-msg">
        <div class="header">
          <span>{{ detailData.reply_count }} 回复</span>
        </div>
        <div class="detail-msg-list">
          <dl v-for="(item,key,index) in detailData.replies" :key="index">
            <dt>
              <img :src="item.author.avatar_url" alt="">
            </dt>
            <dd>
              <p><span>{{ item.author.loginname }}</span><i @click="up(item)">赞<u v-show="item.is_uped">1</u></i><em
                @click="showThisTextArea(item)">回复</em></p>
              <p v-html="item.content"></p>
            </dd>
            <p v-show="item.id === replyId">
              <textarea name="" id="" cols="30" rows="10" v-model="replyContent"></textarea>
              <a href="javascript:;" @click="reply(item)">回复</a>
            </p>
          </dl>
        </div>
      </div>
      <div class="detail-reply">
        <div class="header">
          <span>添加回复</span>
        </div>
        <div class="detail-reply-content">
          <textarea v-model="messageContent"></textarea>
        </div>
        <div class="sub-btn">
          <a href="javascript:;" @click="reply()">回复</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
let token = '29f4c9a1-2b49-4ec0-b5fc-2abfb4f3635f'
let topicId = ''
let collectionApi = ''
let content = ''
let alertText = ''
export default {
  data () {
    return {
      detailData: {},
      isCollection: Boolean,
      replyContent: '',
      messageContent: '',
      replyShow: false,
      replyId: ''
    }
  },
  methods: {
    // 收藏
    collection () {
      if (this.detailData.is_collect) {
        console.log('已收藏')
        this.$set(this.detailData, 'is_collect', false) // $set 后添加的实例对象属性不具备响应式的特性，需要通过$set进行处理
        this.isCollection = false
        collectionApi = 'de_collect'
      } else {
        console.log('未收藏')
        this.$set(this.detailData, 'is_collect', true)
        this.isCollection = true
        collectionApi = 'collect'
      }
      // 修改数据库
      axios.post('https://cnodejs.org/api/v1/topic_collect/' + collectionApi, {
        accesstoken: token,
        topic_id: topicId
      }).then((res) => {
        console.log(res)
      })
    },
    // 留言textarea显示
    showThisTextArea (item) {
      this.replyId = item.id
      this.replyContent = '@' + item.author.loginname
    },
    // 留言&回复
    reply (obj) {
      if (obj) {
        content = this.replyContent
        alertText = '回复成功'
      } else {
        content = this.messageContent
        alertText = '留言成功'
      }
      axios.post('https://cnodejs.org/api/v1/topic/' + topicId + '/replies', {
        accesstoken: token,
        content: content,
        reply_id: this.replyId
      }).then((res) => {
        if (!res.data.success) {
          alert(res.data.error_msg)
        }
        if (res.data.success) {
          alert(alertText)
        }
      })
    },
    // 赞
    up (item) {
      // this.$set(item, 'is_uped', true) 也可以
      axios.post('https://cnodejs.org/api/v1/reply/' + item.id + '/ups', {
        accesstoken: token
      }).then((res) => {
        res.data.action === 'up' ? this.$set(item, 'is_uped', true) : this.$set(item, 'is_uped', false)
        if (res.data.action === 'up') alert('点赞成功')
        if (res.data.action === 'down') alert('取消成功')
      })
    }
  },
  created () {
    topicId = this.$route.params.id
    axios.get('https://cnodejs.org/api/v1/topic/' + topicId + '?accesstoken=' + token).then((res) => {
      this.detailData = res.data.data
      this.isCollection = this.detailData.is_collect
    })
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  .main {
    width: 90%;
    margin: 12px auto;
    overflow: hidden;
    .content {
      width: 1095px;
      float: left;
      text-align: left;
      .content-inner {
        background: white;
        padding: 12px;
        .detail-title {
          font-size: 22px;
          font-weight: 700;
          color: #333;
          span {
            float: left;
            margin: 2px 5px 0 0;
            font-size: 14px;
            background: #80bd01;
            padding: 4px 8px;
            color: white;
            font-weight: normal;
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            border-radius: 3px;
          }
        }
        .title-msg {
          font-size: 12px;
          color: #838383;
          line-height: 36px;
          border-bottom: 1px #E5E5E5 solid;
          a {
            display: inline-block;
            width: 84px;
            height: 34px;
            background: #80BD01;
            color: white;
            font-size: 14px;
            float: right;
            margin-left: 12px;
            text-align: center;
            margin-top: -12px;
            &.active {
              background: #E5E5E5;
              color: black;
            }
          }
          span {
            cursor: pointer;
          }
        }
        .detail-content {
          overflow: hidden;
          padding-top: 12px;
          .markdown-text {
            a {
              color: #08c;
            }
            p {
              font-size: 15px;
              line-height: 1.7em;
              overflow: auto;
              margin: 0 0 10px;
              img {
                max-width: 100%;
              }
            }
            h1 {
              margin: 30px 0 15px;
              font-size: 32px;
              border-bottom: 1px solid #eee;
              line-height: 40px;
            }
            h2 {
              font-size: 26px;
              margin: 30px 0 15px;
              border-bottom: 1px solid #eee;
              line-height: 40px;
            }
            h3 {
              line-height: 40px;
            }
            ul {
              margin: 0 0 10px 25px;
              li {
                line-height: 2em;
              }
            }
            .prettyprint {
              font-size: 14px;
              border-radius: 0;
              padding: 0 15px;
              margin: 20px -10px;
              border-width: 1px 0;
              background: #f7f7f7;
              tab-size: 4;
              code {
                color: inherit;
                white-space: pre-wrap;
                background-color: transparent;
              }
            }
          }
        }
      }
      .detail-msg {
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
        .detail-msg-list {
          background: white;
          overflow: hidden;
          dl {
            padding: 12px;
            border-bottom: 1px #F0F0F0 solid;
            dt {
              float: left;
              margin-right: 12px;
              img {
                width: 30px;
                height: 30px;
                border-radius: 3px;
              }
            }
            dd {
              p {
                line-height: 24px;
                font-size: 14px;
                overflow: hidden;
                span {
                  float: left;
                }
                i, em {
                  float: right;
                  font-style: normal;
                  cursor: pointer;
                  margin-right: 12px;
                }
              }
            }
            textarea {
              width: 100%;
            }
          }
        }
      }
      .detail-reply {
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
        .detail-reply-content {
          textarea {
            width: 100%;
            height: 120px;
            border: 1px #F6F6F6 solid;
          }
        }
        .sub-btn {
          width: 72px;
          height: 36px;
          line-height: 36px;
          color: white;
          text-align: center;
          background: #0088CC;
          a {
            color: white;
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

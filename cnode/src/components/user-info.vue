<template>
  <div class="sider">
    <div class="header">
      <span>个人信息</span>
    </div>
    <div class="user-info">
      <dl>
        <dt>
          <a href="">
            <img :src="userInfo.avatar_url" alt="">
          </a>
        </dt>
        <dd>
          {{ userInfo.loginname }}
        </dd>
      </dl>
      <p>
        积分： {{ userInfo.score }}
      </p>
      <p>
        <i>“ 这家伙很懒，什么个性签名都没有留下。 ”
        </i>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    userName: {
      type: String
    }
  },
  data () {
    return {
      userInfo: {}
    }
  },
  created () {
    console.log(this.userName)
    axios.get('https://cnodejs.org/api/v1/user/' + this.userName).then((res) => {
      this.userInfo = res.data.data
    })
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .sider {
    width: 290px;
    background: white;
    overflow: hidden;
    padding-bottom: 6px;
    float: right;
    .header {
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: left;
      background: #f6f6f6;
      span {
        margin-left: 12px;
        font-size: 12px;
      }
    }
    .user-info {
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
        float: left;
        margin-left: 12px;
        font-size: 13px;
        line-height: 24px;
      }
    }
  }
</style>

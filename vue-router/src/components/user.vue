<template>
  <div>
    user
    <div class="user-list">
      <router-link style="padding: 0 20px; background: none" :to="'/user/' + item.id" v-for="item in userList" :key="item.id">{{ item.userName }}
      </router-link>
    </div>
    <div class="user-info" v-show="userInfo.userName">
    <p>姓名：{{userInfo.userName}}</p>
    <p>性别：{{userInfo.sex}}</p>
    <p>爱好：{{userInfo.like}}</p>
    </div>
  </div>
</template>

<script>
  let data = [
    {
      id: 1,
      userName: '孙悟空',
      sex: '男',
      like: '打妖怪'
    },
    {
      id: 2,
      userName: '猪八戒',
      sex: '男',
      like: '泡妞'
    },
    {
      id: 3,
      userName: '唐僧',
      sex: '男',
      like: '取经'
    }
  ]

  export default {
    data () {
      return {
        userList: data,
        userInfo: {}
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        let id = this.$route.params.userId
        if (id) {
          this.userInfo = this.userList.filter((item) => {
            return item.id === Number(id)
          })[0]
        } else {
          this.userInfo = {}
        }
      }
    },
    watch: {
      $route () {
        this.getData()
      }
    }
  }
</script>

<style scoped>

</style>

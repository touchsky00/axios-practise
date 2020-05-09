<template>
  <div class="login">
    <div style="width:300px"><el-input placeholder="输入用户名" size="mini" /></div>
    <div><el-button @click="sendRequest" type="primary" size="mini">登录</el-button></div>
  </div>
</template>


<script>
// import axios from 'axios'
import { login } from '../api/login'


export default {
  data() {
    return {
      clickTime: 0,
      resData:''
    }
  },

  methods: {
    async sendRequest() {
      // axios({
      //   method: 'get',
      //   url: '/api/login',
      // }).then((res) => {
      //   this.resData = res
      // })
      let res = await login()
      // let data = res.then(result => result.data)
      console.log(res)
    }
  },
}
</script>


<style scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
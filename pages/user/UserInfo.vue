<template>
  <div>
    <h1>userinfo</h1>
    <div>{{ username }}</div>
    <el-button type='primary' @click='register'>注册</el-button>
    <el-button type='primary' @click='getUserList'>注册</el-button>
    <el-button type='primary' @click='login'>登录</el-button>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const res =  await $axios.post('/api/user/info')
    return { ...res.data };
  },
  methods:{
    async register(){
      const res = await this.$axios.post('/api/user/register', {
        username: 'xiaoming',
        password: '999999',
        phoneNumber: '15836153616'
      })
      console.log(res);
    },
    async getUserList(){
      const res = await this.$axios.post('/api/user/list')
      console.log(res);
    },
    async login(){
      const res = await this.$axios.post('/api/user/login', {
        username: 'xiaoming',
        password: '999999',
      })
      console.log(res);
    }
  }
}
</script>
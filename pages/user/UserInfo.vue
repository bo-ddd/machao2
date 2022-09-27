<template>
  <div>
    <h1>userinfo</h1>
    <el-button type='primary' @click='register'>注册</el-button>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const res =  await $axios.post('/api/user/list')
    return res;
  },
  methods:{
    async register(){
      const res = await this.$axios.post('/api/user/register', {
        username: 'xiaoming',
        password: '999999',
        phoneNumber: '15836153616'
      })
      console.log(res);
    }
  }
}
</script>
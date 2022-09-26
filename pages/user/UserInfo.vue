<template>
  <div>
    <h1>userinfo</h1>
    <div>{{ username }}</div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    return await $axios.post('http://localhost:3000/api/user/info')
  },
}
</script>
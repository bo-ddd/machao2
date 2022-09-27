<template>
  <div>
    <h1>userinfo</h1>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const res =  await $axios.post('/api/user/list')
    console.log(res);
    return res;
  },
}
</script>
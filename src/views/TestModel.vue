<template>
  <div class="test-model-container">
    <van-button class="test-button" plain type="primary" @click="monkey">Monkey测试</van-button>
    <van-button class="test-button" style="margin-left:16px" plain type="info" @click="goThrough">智能遍历测试</van-button>
  </div>
</template>
<script>
export default {
  methods: {
    monkey () {
      this.$router.push('/monkey')
    },
    goThrough () {

    }
  }
}
</script>
<style  scoped>
.test-model-container {
  display: flex;
  height: 100vh;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
}
.test-button {
  width: 100%;
  height: 100px;
}
</style>
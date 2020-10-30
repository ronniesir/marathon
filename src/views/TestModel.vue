<template>
  <div class="test-model-container">
    <van-button icon="user-o" class="test-button" plain type="primary" @click="monkey">资源监控</van-button>
    <van-button icon="bulb-o" class="test-button" style="margin-left:16px" plain type="info" @click="goThrough">智能遍历</van-button>
  </div>
</template>
<script>
export default {
  methods: {
    monkey () {
      this.$router.push('/run')
    },
    goThrough () {
      this.$router.push('/monkey')
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
  font-size: 24px;
}
</style>
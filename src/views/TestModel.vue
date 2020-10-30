<template>
  <div class="test-model-container">
    <van-button plain type="primary" @click="monkey">Monkey测试</van-button>
    <van-button style="margin-top:16px" plain type="info" @click="goThrough">智能遍历测试</van-button>
  </div>
</template>
<script>
export default {
  methods:{
    monkey(){
      this.$router.push('/monkey')
    },
    goThrough(){

    }
  }
}
</script>
<style  scoped>
 .test-model-container{
   display: flex;
   height: 100vh;
   flex-direction: column;
   justify-content: center;
   align-items: center;
 }
</style>
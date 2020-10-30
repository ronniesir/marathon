<template>
  <div class="monkey-container">

    <div class="btn-container">
      <van-button class="back" icon="arrow-left" type="primary" round @click="back" />
      <van-dropdown-menu>
        <van-dropdown-item class="drowdown-item" v-model="value1" :options="option1" />
      </van-dropdown-menu>
    </div>

    <div class="check-container">
      <van-cell center title="异常终止">
        <template #right-icon>
          <van-switch v-model="checked1" size="24" />
        </template>
      </van-cell>
      <van-cell center title="自动停止">
        <template #right-icon>
          <van-switch v-model="checked2" size="24" />
        </template>
      </van-cell>
    </div>

    <van-cell title="执行时间" :value="time+'s'" />
    <div style="padding:10px 16px;">
      <van-slider v-model="time" bar-height="16px" @change="onChange" max="120">
        <template #button>
          <div class="custom-button">{{ time }}s</div>
        </template>
      </van-slider>
    </div>

    <van-button style="margin-top:32px" type="primary" @click="run">运行</van-button>

  </div>
</template>
<script>
export default {
  data () {
    return {
      value1: 0,
      value2: '0',
      checked1:false,
      checked2:false,
      option1: [
        { text: '切换', value: 0 },
        { text: '点击', value: 1 },
      ],
      time: 30
    };
  },
  methods: {
    onChange () {

    },
    run () {

    },
    back () {
      this.$router.go(-1)
    }
  },
};
</script>
<style  scoped>
.monkey-container {
  width: 100%;
  display: flex;
  height: 100vh;
  flex-direction: column;
}
.custom-button {
  width: 26px;
  color: #fff;
  font-size: 10px;
  line-height: 18px;
  text-align: center;
  background-color: #4fc08d;
  border-radius: 100px;
}
.btn-container {
  padding: 16px 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.drowdown-item {
  width: 100px;
}
.back {
  width: 32px;
  height: 32px;
}
.check-container{
  display: flex;
  flex-direction: row;
}
</style>
<template>
  <div class="monkey-container">

    <div class="btn-container">
      <van-button class="back" icon="arrow-left" type="primary" round @click="back" />
    </div>

    <van-cell-group title="Monkey Setting">

      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>

      <van-cell title="执行时间" :value="time+'s'" />
      <div style="padding:10px 16px;">
        <van-slider v-model="time" bar-height="16px" @change="onChange">
          <template #button>
            <div class="custom-button">{{ time }}s</div>
          </template>
        </van-slider>
      </div>
    </van-cell-group>

    <van-button style="margin-top:32px" type="primary" @click="run">运行</van-button>

  </div>
</template>
<script>
export default {
  data () {
    return {
      value1: 0,
      value2: '0',
      option1: [
        { text: '切换1', value: 0 },
        { text: '切换2', value: 1 },
      ],
      option2: [
        { text: '点击1', value: '0' },
        { text: '点击2', value: '1' },
      ],
      time: 10
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
.btn-container{
  padding: 16px 8px;
}
.back {
  width: 32px;
  height: 32px;
}
</style>
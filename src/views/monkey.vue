<template>
  <div class="monkey-container">

    <van-cell-group title="Monkey Setting">
      <van-field readonly clickable label="切换模式" :value="actValue" placeholder="选择切换模式" @click="showActPicker = true" />
      <van-popup v-model="showActPicker" round position="bottom">
        <van-picker show-toolbar :columns="activeModel" @cancel="showActPicker = false" @confirm="onActConfirm" />
      </van-popup>
      <van-field readonly clickable label="点击模式" :value="clickValue" placeholder="选择点击模式" @click="showClickPicker = true" />
      <van-popup v-model="showClickPicker" round position="bottom">
        <van-picker show-toolbar :columns="clickModel" @cancel="showClickPicker = false" @confirm="onClickConfirm" />
      </van-popup>
      <van-cell title="执行时间" :value="time+'s'" />
      <div style="padding:10px 16px">
        <van-slider v-model="time" @change="onChange">
          <template #button>
            <div class="custom-button">{{ time }}s</div>
          </template>
        </van-slider>
      </div>
    </van-cell-group>

    <van-button type="primary" @click="run">运行</van-button>

  </div>
</template>
<script>
export default {
  data () {
    return {
      actValue: '',
      showActPicker: false,
      activeModel: ['切换1', '切换2'],
      clickValue: '',
      showClickPicker: false,
      clickModel: ['click1', 'click2'],
      time: 10
    };
  },
  methods: {
    onActConfirm (value) {
      this.actValue = value;
      this.showActPicker = false;
    },
    onClickConfirm (value) {
      this.clickValue = value;
      this.showClickPicker = false;
    },
    onChange () {

    },
    run(){
      
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
</style>
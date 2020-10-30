<template>
  <div>
    <div class="title title-bar">
      <div>
        <van-button class="back" icon="arrow-left" type="primary" @click="back" /><span>CPU</span>
      </div>
      <span>
        <van-button type="primary" size="mini" @click="open">查看结果</van-button>
      </span>
    </div>
    <div id="cupChart" :style="{ height: '280px'}"></div>
    <van-button class="down-btn" icon="down" type="primary" @click="down" />

    <div class="title">Memory</div>
    <div id="memoryChart" :style="{ height: '280px'}"></div>
    <van-button class="up-btn" icon="back-top" type="primary" @click="up" />

    <van-popup v-model="show" position="center" :style="{ height: '140px',width:'300px' }">
      <div class="pop-container">
        <div class="item">
          <span>WIFI</span>
          <img style="width:110px;height:110px" src="@/assets/wifi.png" />
        </div>
        <div class="item">
          <span>RESULT</span>
          <img style="width:110px;height:110px;" src="@/assets/result.png" />
        </div>

      </div>
    </van-popup>
  </div>
</template>
<script>
import echarts from 'echarts'
import axios from 'axios'
export default {
  data () {
    return {
      cpuData: [{ value: 0, name: 'CPU' }],
      memoryData: {
        xAxis: [],
        yAxis: []
      },
      show: false
    }
  },
  mounted () {
    let cupChart = echarts.init(document.getElementById("cupChart"));
    const cpuOption = {
      tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
      },
      series: [
        {
          name: '业务指标',
          type: 'gauge',
          detail: { formatter: '{value}%' },
          data: this.cpuData
        }
      ],
      axisLine: {            // 坐标轴线
        lineStyle: {       // 属性lineStyle控制线条样式
          width: 8
        }
      },
      axisTick: {            // 坐标轴小标记
        show: false
      },
      splitLine: {           // 分隔线
        length: 15,         // 属性length控制线长
        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
          color: 'auto'
        }
      },
      pointer: {
        width: 2
      },
    }
    cupChart.setOption(cpuOption)

    let memoryChart = echarts.init(document.getElementById("memoryChart"));
    const memoryOption = {
      tooltip: {

      },
      xAxis: {
        type: 'category',
        data: this.memoryData.xAxis
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: this.memoryData.yAxis,
        type: 'line',
        label: {
          normal: {
            show: true
          }
        }
      }]
    };
    memoryChart.setOption(memoryOption)

    var baseUrl = window.location.origin;

    this.myInterval = setInterval(() => {

      axios.get(`${baseUrl}/api/cpu`).then(res => {
        console.log('------', res.data)
        const result = res.data;
        if (result) {
          this.cpuData[0].value = (result * 1 / 8).toFixed(2)
        } else {
          this.cpuData[0].value = (Math.random() * 100).toFixed(2) - 0;
        }

        cupChart.setOption(cpuOption)
      });

      axios.get(`${baseUrl}/api/memory`).then(res => {
        const result = res.data;
        const date = new Date();
        const currentTime = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDay() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
        this.memoryData.xAxis.push(currentTime)

        if (result) {
          this.memoryData.yAxis.push(result * 1000);
        } else {
          const currentMemory = (Math.random() * 1000).toFixed(2) - 0;
          this.memoryData.yAxis.push(currentMemory)
        }
        memoryChart.setOption(memoryOption)
      });

    }, 5000);
  },
  methods: {
    open () {
      this.show = true;
    },
    down () {
      window.scroll({ top: 700, left: 0, behavior: 'smooth' });
    },
    up () {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    },
    back () {
      this.$router.go(-1)
    }
  },
  destroyed () {
    if (this.myInterval) {
      clearInterval(this.myInterval);
    }

  }
}
</script>

<style scoped>
.title {
  padding: 8px 16px;
}
.title-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.pop-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4px;
}
.pop-container .item {
  text-align: center;
}
.down-btn {
  position: absolute;
  right: 16px;
  top: 266px;
}
.up-btn {
  position: absolute;
  right: 8px;
  top: 645px;
}
</style>
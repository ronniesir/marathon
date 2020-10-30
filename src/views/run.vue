<template>
  <div>
    <div class="title">CPU</div>
    <div id="cupChart" :style="{ height: '280px'}"></div>
    <div class="title">Memory</div>
    <div id="memoryChart" :style="{ height: '280px'}"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      cpuData: [{ value: 50, name: 'CPU' }],
      memoryData: {
        xAxis: [],
        yAxis: []
      }
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
      xAxis: {
        type: 'category',
        data: this.memoryData.xAxis
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: this.memoryData.yAxis,
        type: 'line'
      }]
    };
    memoryChart.setOption(memoryOption)


    setInterval(() => {
      this.cpuData[0].value = (Math.random() * 100).toFixed(2) - 0;
      cupChart.setOption(cpuOption)

      const date = new Date();
      const currentTime = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDay() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()


      const currentMemory = (Math.random() * 100).toFixed(2) - 0;
      this.memoryData.xAxis.push(currentTime)
      this.memoryData.yAxis.push(currentMemory)

      memoryChart.setOption(memoryOption)
    }, 2000);
  }
}
</script>

<style scoped>
.title {
  padding: 8px 16px;
}
</style>
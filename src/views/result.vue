<template>
  <div>
    <timeline>
      <timeline-title>我的结果</timeline-title>
      <timeline-item v-for="(img,index) of images" :key="index" bg-color="#9dd8e0">
        <div class="date">{{getName(img)}}</div>
        <img style="width:400px" :src="getPath(img)" />
      </timeline-item>
    </timeline>
  </div>
</template>
<script>
import axios from 'axios'
import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'
export default {
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle
  },
  data () {
    return {
      images: [1, 2, 3]
    }
  },
  methods: {
    getName (img) {

      console.log('-------',img)
      if (img) {
        const date = new Date(img.split('.')[0]*1);
        return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDay() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
      }else{
        return '2020/10/31'
      }
    },
    getPath(img){
       var baseUrl = window.location.origin;
      return  baseUrl+'/'+img;
    }
  },
  mounted () {
    var baseUrl = window.location.origin;
    this.myInterval = setInterval(() => {
      axios.get(`${baseUrl}/api/result`).then(result => {
        console.log('----',result)
        this.images = result.data;
      });
    }, 3000)
  },
  destroyed () {
    if (this.myInterval) {
      clearInterval(this.myInterval);
    }

  }
}
</script>
<style  scoped>
.date {
  padding: 0 8px 8px 8px;
  font-weight: bold;
}
</style>>
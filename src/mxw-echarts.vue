<template>
<div class="main">
    <div class="main-top">
        <mxw-well class="col-sm-2 col-xs-12 main-top-item">
            <span>
                <h3>0</h3>
                <p style="color: gray;">今日访问总量</p>
            </span>
            <span>
                <i class="fa fa-eye"></i>
            </span>
        </mxw-well>
        <mxw-well class="col-sm-2 col-xs-12 main-top-item">
            <span>
                <h3>0</h3>
                <p style="color: gray;">今日访问总量</p>
            </span>
            <span>
                <i class="fa fa-eye"></i>
            </span>
        </mxw-well>
        <mxw-well class="col-sm-2 col-xs-12 main-top-item">
            <span>
                <h3>0</h3>
                <p style="color: gray;">今日访问总量</p>
            </span>
            <span>
                <i class="fa fa-eye"></i>
            </span>
        </mxw-well>
        <mxw-well class="col-sm-2 col-xs-12 main-top-item">
            <span>
                <h3>0</h3>
                <p style="color: gray;">今日访问总量</p>
            </span>
            <span>
                <i class="fa fa-eye"></i>
            </span>
        </mxw-well>

       
    </div>
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div class="main-top">
      <mxw-well id="myChart2" class="charts col-sm-6 col-xs-12"></mxw-well>
      <mxw-well id="myChart" class="charts col-sm-6 col-xs-12"></mxw-well>
    </div>
    <!-- <button type="button" @click="addAlert({level: 'success', text: '123'})">提示</button>
    <button type="button" @click="addAlert({level: 'info', text: 'sa'})">提示</button>
    <button type="button" @click="addAlert({level: 'warning', text: '12das3'})">提示</button>
    <button type="button" @click="addAlert({level: 'danger', text: '124d'})">提示</button> -->

    
</div>
</template>
<script scoped>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/line");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");

import mxwWell from "./mxw-well.vue";
import { mapActions } from 'vuex'


export default {
  components: {
    mxwWell
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions([
      'addAlert'
    ]),
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "支持统计",
          subtext: "每日支持总量"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          data: [
            "2018-06-20",
            "2018-06-21",
            "2018-06-22",
            "2018-06-23",
            "2018-06-24",
            "2018-06-25",
            "2018-06-26",
            "2018-06-27",
            "2018-06-28",
            "2018-06-29"
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [1, 2, 3, 4, 4, 5, 7, 0, 5, 0],
            type: "line"
          }
        ]
      });
    },


    drawLine2() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart2"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "访问统计",
          subtext: "每日访问总量"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          data: [
            "2018-06-20",
            "2018-06-21",
            "2018-06-22",
            "2018-06-23",
            "2018-06-24",
            "2018-06-25",
            "2018-06-26",
            "2018-06-27",
            "2018-06-28",
            "2018-06-29"
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [122, 412, 31, 124, 44, 523, 71, 633, 53, 120],
            type: "line"
          }
        ]
      });
    }
  },
  mounted() {
    this.drawLine();
    this.drawLine2();
  }
};
</script>
<style scoped>
.charts {
  height: 400px;
}
.main {
  display: flex;
  flex-direction: column;
}
.main-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.main-top-item {
  display: flex;
  justify-content: space-around;
}
</style>


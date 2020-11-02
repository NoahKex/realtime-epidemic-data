!<!-- Domestic -->
<template>
  <div class='domestic' v-loading="loading">
    <div class="outSide">
      <div id="myChart" class="echart"></div>
      <div class="dataBox">
        <area-box text="现存确诊" color="#FA7E23" :count="domesticInfo.domesticCurrentConfirmedCount" :increase="domesticInfo.domesticCurrentConfirmedIncr"></area-box>
        <div class="line"></div>
        <area-box text="累计确诊" color="#2474B5" :count="domesticInfo.domesticConfirmedCount" :increase="domesticInfo.domesticConfirmedIncr"></area-box>
        <div class="line"></div>
        <area-box text="境外输入" color="#feba07" :count="domesticInfo.domesticSuspectedCount" :increase="domesticInfo.domesticSuspectedIncr"></area-box>
        <div class="line"></div>
        <area-box text="现存无症状" color="#806d9e" :count="domesticInfo.domesticSeriousCount" :increase="domesticInfo.domesticSeriousIncr"></area-box>
        <div class="line"></div>
        <area-box text="累计死亡" color="#EE3F4D" :count="domesticInfo.domesticDeadCount" :increase="domesticInfo.domesticDeadIncr"></area-box>
        <div class="line"></div>
        <area-box text="累计治愈" color="#41B349" :count="domesticInfo.domesticCuredCount" :increase="domesticInfo.domesticCuredIncr"></area-box>
      </div>
    </div>
  </div>
</template>

<script>
  import AreaBox from '@/views/components/dataBox/AreaBox'
  export default {
    components: {
      AreaBox
    },
    data() {
      return {
        domesticInfo:{},
        domesticSpecificInfo:[],
        loading:true
      };
    },
    computed: {},
    watch: {},
    methods: {
      drawMap(){
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        myChart.setOption({
        title: {
            text: '国内疫情地图',
        },
        tooltip: {
            formatter:params => params.name + '<br/>' + params.seriesName + ': ' + (isNaN(params.value)?'未统计':params.value)
        },
        visualMap: {
          type: 'piecewise',
          pieces: [
            {min: 10000 ,color:'#5a1216'},
            {min: 1000, lte: 9999,color:'#7c1823'},
            {min: 500, max: 999,color:'#c02c38'},
            {min: 100, max: 499,color:'#ed556a'},
            {min: 10, max: 99 ,color:'#f19790'},
            {min: 1, max: 9 , color:'#f8e8c1'},
            {value: 0 , color:'#f7f4ed'}
          ]
        },
        toolbox: {
            show: true,
            left: 'right',
            feature: {
                saveAsImage: {
                  name:'国内疫情数据地图'
                },
                restore: {}
            }
        },
        series: [
            {
                name: '现存确诊',
                type: 'map',
                roam: true,
                map: 'china',
                emphasis: {
                    label: {
                        show: true
                    }
                },
                // 文本位置修正
                textFixed: {
                    Alaska: [20, -20]
                },
                data:this.domesticSpecificInfo
            }
        ]
        });
      }
    },
    created() {
      
    },
    mounted() {
      this.$dataService.totalEpidemicInfo()
      .then(res=>{
        this.domesticInfo = res.msg.domesticInfo;
        this.$dataService.domesticEpidemicInfo()
        .then(res=>{
          for(let item of res.msg){
            let obj = {
              name:item.provinceShortName,
              value:item.currentConfirmedCount
            }
            this.domesticSpecificInfo.push(obj);
            this.drawMap();
            this.loading = false;
          }
        })
      })
      .catch(err=>{
        this.$message({
          message: '获取数据失败',
          type: 'error'
        });
      })
    }
  }
</script>
<style lang='less' scoped>
  .domestic{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .outSide{
      height: 90%;
      width: 95%;
      border: .03rem solid #ebebeb;
      box-shadow: 0 0.04rem 0.12rem 0 rgba(0,0,0,.05);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .echart{
        height: 75%;
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
      }
      .dataBox{
        height: 20%;
        width: 95%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .line{
          height: 0.7rem;
          width: 1px;
          background-color: #EAEAEA;
        }
      }
    }
  }
</style>
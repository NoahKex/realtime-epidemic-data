!<!-- international -->
<template>
  <div class='foreign' v-loading="loading">
    <div class="outSide">
      <div class="dataBox">
        <area-box text="现存确诊" color="#FA7E23" :count="foreignInfo.foreignCurrentConfirmedCount"></area-box>
        <div class="line"></div>
        <area-box text="累计确诊" color="#2474B5" :count="foreignInfo.foreignConfirmedCount"></area-box>
        <div class="line"></div>
        <area-box text="累计死亡" color="#EE3F4D" :count="foreignInfo.foreignDeadCount"></area-box>
        <div class="line"></div>
        <area-box text="累计治愈" color="#41B349" :count="foreignInfo.foreignCuredCount"></area-box>
      </div>
      <div class="tableBox">
        <div class="menuBox">
          <el-select v-model="value" @change="selectChange">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="table" id="myChart"></div>
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
        loading:true,
        foreignInfo:{},
        options: [{
          value: 'currentConfirmedCount',
          label: '现存确诊'
        }, {
          value: 'confirmedCount',
          label: '累计确诊'
        }, {
          value: 'deadCount',
          label: '累计死亡'
        }, {
          value: 'deadRate',
          label: '死亡率'
        }, {
          value: 'curedCount',
          label: '累计治愈'
        }],
        value:'现存确诊',
        foreignArr:[],
        currentConfirmedArr:[],
        confirmedArr:[],
        deadArr:[],
        deadRateArr:[],
        curedArr:[],
        usedArr:[],
        xName:"人"
      };
    },
    computed: {},
    watch: {},
    methods: {
      drawTable(){
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        myChart.setOption({
          title: {
            text: '排名前10国家/地区',
            textStyle: {
              fontWeight: 'lighter'
            }
          },
          dataset: {
              source: this.usedArr
          },
          grid: {containLabel: true},
          xAxis: {name: this.xName},
          yAxis: {type: 'category'},
          series: [
              {
                  type: 'bar',
                  encode: {
                      x: 'number',
                      y: 'country'
                  },
                  itemStyle:{
                    normal:{
                      color:'#3E66CD',
                      label:{
                        show:true,
                        position: 'right',
                        textStyle:{
                          color:'#1781b5'
                        }
                      }
                    }
                  },
              }
          ]
        });
      },
      createArray(props){
        let trueArr = Array.from(this.foreignArr);
        trueArr.sort(this.sortBy(props));
        let arr=[];
        arr.push(["country","number"]);
        for(let i=9;i>=0;i--){
          arr.push([trueArr[i].provinceName,Number(trueArr[i][props])]);
        }
        return arr;
      },
      sortBy(props){
        return (a,b) => Number(b[props])-Number(a[props]);
      },
      selectChange(e){
        switch(e){
          case "currentConfirmedCount":
            this.xName="人";
            this.usedArr=this.currentConfirmedArr;
            break;
          case "confirmedCount":
            this.xName="人";
            this.usedArr=this.confirmedArr;
            break;
          case "deadCount":
            this.xName="人";
            this.usedArr=this.deadArr;
            break;
          case "deadRate":
            this.xName="%";
            this.usedArr=this.deadRateArr;
            break;
          case "curedCount":
            this.xName="人";
            this.usedArr=this.curedArr;
            break;
        }
        this.drawTable();
      }
    },
    created() {
      
    },
    mounted() {
      this.$dataService.totalEpidemicInfo()
      .then(res=>{
        this.foreignInfo = res.msg.foreignInfo;
        this.$dataService.foreignEpidemicInfo()
        .then(res=>{
          this.foreignArr=res.msg;
          this.currentConfirmedArr=this.createArray("currentConfirmedCount");
          this.confirmedArr=this.createArray("confirmedCount");
          this.deadArr=this.createArray("deadCount");
          this.deadRateArr=this.createArray("deadRate");
          this.curedArr=this.createArray("curedCount");
          this.usedArr=this.currentConfirmedArr;//初始化
          this.drawTable();
          this.loading = false;
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
  .foreign{
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
      align-items: center;
      justify-content: space-around;
      .dataBox{
        height: 94%;
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .line{
          height: 1px;
          width: 1rem;
          background-color: #EAEAEA;
        }
      }
      .tableBox{
        height: 94%;
        width: 60%;
        .menuBox{
          height: 10%;
          width: 100%;
          display: flex;
        }
        .table{
          height: 90%;
          width: 100%;
        }
      }
    }
  }
</style>
!<!-- DomesticDetails -->
<template>
  <div class='domesticDetails'>
    <div class="outSide">
      <div class="totalInfoBox">
        <area-box text="现存确诊" color="#FFFFFF" text-color='#d8e3e7' :count="info.currentConfirmedCount"></area-box>
        <area-box text="累计确诊" color="#FFFFFF" text-color='#d8e3e7' :count="info.confirmedCount"></area-box>
        <area-box text="累计死亡" color="#FFFFFF" text-color='#d8e3e7' :count="info.deadCount"></area-box>
        <area-box text="累计治愈" color="#FFFFFF" text-color='#d8e3e7' :count="info.curedCount"></area-box>
        <div class="shape">
          <p class="text">中国·{{info.provinceShortName}}</p>
        </div>
      </div>
      <div class="tableBox">
        <el-table
          :data="info.cities"
          border
          height="100%"
          style="width: 100%">
          <el-table-column
            prop="cityName"
            label="地域"
            width="120"
            align="center">
          </el-table-column>
          <el-table-column
            prop="currentConfirmedCount"
            label="现存确诊"
            align="center">
          </el-table-column>
          <el-table-column
            prop="confirmedCount"
            label="累计确诊"
            align="center">
          </el-table-column>
          <el-table-column
            prop="deadCount"
            label="累计死亡"
            align="center">
          </el-table-column>
          <el-table-column
            prop="curedCount"
            label="累计治愈"
            align="center">
          </el-table-column>
        </el-table>
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
    props:{
      city:{
        type:String
      }
    },
    data() {
      return {
        info:{}
      };
    },
    computed: {},
    watch: {},
    methods: {
      
    },
    created() {
      
    },
    mounted() {
      this.info=JSON.parse(sessionStorage.getItem("domesticInfo"))[this.city];
    },
    beforeRouteUpdate (to, from, next) {
      this.info=JSON.parse(sessionStorage.getItem("domesticInfo"))[to.params.city];
      next()
    },
    activated() {
      this.info=JSON.parse(sessionStorage.getItem("domesticInfo"))[this.city];
    }
  }
</script>
<style lang='less' scoped>
  .domesticDetails{
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
      .totalInfoBox{
        height: 1.2rem;
        width: 80%;
        background-color: #6761C7;
        border-radius: 0.05rem;
        overflow: hidden;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .shape{
          height: 100%;
          width: 40%;
          background-color: #7671CD;
          position: relative;
          left: 1rem;
          transform:skew(-30deg);
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          .text{
            height: 0.5rem;
            width: 2rem;
            text-align: right;
            margin-right: 1rem;
            font-size: 0.25rem;
            color: #d8e3e7;
            transform:skew(30deg);
          }
        }
      }
      .tableBox{
        height: 4.5rem;
        width: 80%;
        background-color: aqua;
      }
    }
  }
</style>
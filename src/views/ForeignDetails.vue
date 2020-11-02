!<!--  -->
<template>
  <div class='foreignDetails'>
    <div class="outSide">
      <div class="totalInfoBox">
        <div class="info">
          <div class="infoBox">
            <area-box text="现存确诊" color="#FFFFFF" text-color='#d8e3e7' :count="info.currentConfirmedCount"></area-box>
            <area-box text="累计确诊" color="#FFFFFF" text-color='#d8e3e7' :count="info.confirmedCount"></area-box>
            <area-box text="累计死亡" color="#FFFFFF" text-color='#d8e3e7' :count="info.deadCount"></area-box>
            <area-box text="累计治愈" color="#FFFFFF" text-color='#d8e3e7' :count="info.curedCount"></area-box>
          </div>
          <div class="infoBox">
            <area-box text="新增确诊" color="#FFFFFF" text-color='#d8e3e7' :count="info.confirmedIncr"></area-box>
            <area-box text="新增死亡" color="#FFFFFF" text-color='#d8e3e7' :count="info.deadIncr"></area-box>
            <area-box text="确诊人数排名" color="#FFFFFF" text-color='#d8e3e7' :count="info.confirmedCountRank"></area-box>
            <area-box text="死亡人数排名" color="#FFFFFF" text-color='#d8e3e7' :count="info.deadCountRank"></area-box>
          </div>
          <div class="tips">*部分国家新增数据为0例为尚未得到统计数据所导致</div>
        </div>
        <div class="shape">
          <p class="text">{{info.continents}}·{{info.provinceName}}</p>
        </div>
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
      country:{
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
      this.info=JSON.parse(sessionStorage.getItem("foreignInfo"))[this.country];
    },
    beforeRouteUpdate (to, from, next) {
      this.info=JSON.parse(sessionStorage.getItem("foreignInfo"))[to.params.country];
      next()
    },
    activated() {
      this.info=JSON.parse(sessionStorage.getItem("foreignInfo"))[this.country];
    }
  }
</script>
<style lang='less' scoped>
  //@import '';
  .foreignDetails{
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
      .totalInfoBox{
        height: 5.5rem;
        width: 80%;
        background-color: #6761C7;
        border-radius: 0.05rem;
        overflow: hidden;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .info{
          height: 100%;
          width: 60%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .infoBox{
            height: 30%;
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-left: 1.5rem;
          }
        }
        .shape{
          height: 100%;
          width: 40%;
          left: 2.3rem;
          background-color: #7671CD;
          position: relative;
          transform:skew(-40deg);
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          .text{
            height: 0.5rem;
            width: 2.8rem;
            text-align: right;
            margin-right: 0.4rem;
            font-size: 0.2rem;
            line-height: 0.5rem;
            color: #d8e3e7;
            transform:skew(40deg);
          }
        }
        .tips{
          height: 0.2rem;
          width: 4rem;
          font-size: 0.1rem;
          color: #d8e3e7;
          line-height: 0.2rem;
          position: relative;
          top: 0.87rem;
        }
      }
    }
  }
</style>
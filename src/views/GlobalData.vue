!<!-- global -->
<template>
  <div class='global' v-loading="loading">
    <div class="outSide">
      <div class="data">
        <total-box text="现存确诊" color="#FA7E23" :count="totalInfo.currentConfirmedCount" :increase="totalInfo.currentConfirmedIncr"></total-box>
        <total-box text="累计死亡" color="#EE3F4D" :count="totalInfo.deadCount" :increase="totalInfo.deadIncr"></total-box>
      </div>
      <div class="imgBox">
        <img src="@/assets/medicalPersonnel.jpg" alt="" class="img">
      </div>
      <div class="data">
        <total-box text="累计确诊" color="#2474B5" :count="totalInfo.confirmedCount" :increase="totalInfo.confirmedIncr"></total-box>
        <total-box text="累计治愈" color="#41B349" :count="totalInfo.curedCount" :increase="totalInfo.curedIncr"></total-box>
      </div>
    </div>
  </div>
</template>

<script>
  import TotalBox from '@/views/components/dataBox/TotalBox';
  export default {
    components: {
      TotalBox
    },
    data() {
      return {
        totalInfo:{},
        loading:true
      };
    },
    computed: {},
    watch: {},
    methods: {
      
    },
    created() {
      
    },
    mounted() {
      this.$dataService.totalEpidemicInfo()
      .then(res=>{
        this.totalInfo = res.msg.totalInfo;
        this.loading = false;
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
  .global{
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
      .data{
        height: 100%;
        width: 35%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }
      .imgBox{
        height: 100%;
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        .img{
          height: 3.5rem;
          width: 3.5rem;
        }
      }
    }
  }
  
</style>
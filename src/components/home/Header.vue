!<!-- Header -->
<template>
  <div class='header'>
    <div class="leftHeader">
      <img src="@/assets/icon/info.png" alt="" class="infoImg">
      <p class="title">新冠疫情实时数据</p>
    </div>
    <div class="rightHeader">
      <div class="leftBox">
        <p class="text">数据来源：丁香园·丁香医生</p>
        <p class="text">最后更新时间：<span style="color:#93d5dc;">{{nowTime}}</span></p>
      </div>
      <div class="rightBox">
        <img @click="toGitHub()" src="@/assets/icon/GitHub.png" alt="" class="img">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        nowTime:'',
      };
    },
    computed: {},
    watch: {},
    methods: {
      toGitHub(){
        window.location.href="https://github.com/NoahKex/realtime-epidemic-data";
      }
    },
    created() {
    },
    mounted() {
      this.$dataService.nowTime()
        .then(res=>{
          this.nowTime = res.nowTime;
        })
        .catch(err=>{
            this.$message({
              message: '获取当前时间失败',
              type: 'error'
            });
            return '';
        })
    }
  }
</script>
<style lang='less' scoped>
  @width:300px;
  .header{
    height: 100%;
    background-color: #3067D4;
    box-shadow: 0 1px 2px 0 #939396;
    transform: translate3d(0, 0, 0);
    display: flex;
    justify-content: space-between;
    .leftHeader{
      height: 100%;
      width: @width;
      background-color: #3570E0;
      display: flex;
      align-items: center;
      .infoImg{
        height: 30px;
        width: 30px;
        margin-left: 10px;
      }
      .title{
        height: 30px;
        width: 200px;
        line-height: 30px;
        font-size: 25px;
        font-weight: 700;
        color: white;
        margin-left: 10px;
      }
    }
    .rightHeader{
      height: 100%;
      width: calc(100vw - @width);
      display: flex;
      justify-content: space-between;
      align-items: center;
      .leftBox{
        height: 100%;
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 45px;
        .text{
          height: 0.26rem;
          width: 100%;
          line-height: 0.26rem;
          font-size: 0.07rem;
          color: #8abcd1;
        }
      }
      .rightBox{
        height: 100%;
        width: 110px;
        display: flex;
        align-items: center;
        justify-content: center;
        .img{
          height: 35px;
          width: 35px;
        }
      }
    }
  }
</style>
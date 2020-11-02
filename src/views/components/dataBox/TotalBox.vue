!<!-- total -->
<template>
  <div class='totalBox'>
    <p class="title">{{text}}</p>
    <p class="number" :style="{color}">{{divisionNumber}}</p>
    <p class="growth">较昨日<span :style="{color:increase==0?'#000000':color}">{{getIncrease}}</span></p>
  </div>
</template>

<script>
  export default {
    props:{
      text:{
        type:String,
        default:''
      },
      color:{
        type:String,
        default:'#000000'
      },
      count:{
        type:Number,
        default:0
      },
      increase:{
        type:Number,
        default:0
      }
    },
    components: {},
    data() {
      return {
        
      };
    },
    computed: {
      divisionNumber:function(){
        return this.count.toString().replace(/\B(?=(?:\d{3})+\b)/g, ',');
      },
      getIncrease:function(){
        return this.increase==0?'无变化':this.increase>0?'+'+this.increase:this.increase;
      }
    },
    watch: {},
    methods: {
      
    },
    created() {
      
    },
    mounted() {
      
    }
  }
</script>
<style lang='less' scoped>
  .totalBox{
    height: 2rem;
    width: 3rem;
    border-left: .01rem solid #E3E3E3;
    border-right: .01rem solid #E3E3E3;
    .title{
      height: 0.6rem;
      width: 100%;
      font-size: 0.28rem;
      line-height: 0.6rem;
      text-align: center;
      font-weight: 600;
    }
    .number{
      height: 0.9rem;
      width: 100%;
      font-size: 0.4rem;
      line-height: 0.9rem;
      text-align: center;
      font-weight: bolder;
    }
    .growth{
      height: 0.5rem;
      width: 100%;
      font-size: 0.22rem;
      line-height: 0.5rem;
      text-align: center;
    }
  }
</style>
!<!-- DomesticBox -->
<template>
  <div class='areaBox'>
    <p class="title" :style="{color:textColor}">{{text}}</p>
    <p class="number" :style="{color}">{{divisionNumber}}</p>
    <p v-if="increase!=0.5" class="growth">较昨日<span :style="{color:increase==0?'#000000':color}">{{getIncrease}}</span></p>
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
      textColor:{
        type:String,
        default:'#000000'
      },
      count:{
        type:Number,
        default:0
      },
      increase:{
        type:Number,
        default:0.5
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
  .areaBox{
    height: 1rem;
    width: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title{
      height: 0.3rem;
      width: 100%;
      font-size: 0.15rem;
      line-height: 0.3rem;
      text-align: center;
      font-weight: 600;
    }
    .number{
      height: 0.45rem;
      width: 100%;
      font-size: 0.25rem;
      line-height: 0.4rem;
      text-align: center;
      font-weight: bolder;
    }
    .growth{
      height: 0.25rem;
      width: 100%;
      font-size: 0.17rem;
      line-height: 0.25rem;
      text-align: center;
    }
  }
</style>
!<!-- Aside -->
<template>
  <div class='aside'>
    <el-menu style="margin-top:20px;" router :default-active="$route.path" :collapse="isCollapse">
      <el-menu-item index="/">
          <i class="el-icon-pie-chart"></i>
          <span slot="title">全球数据总览</span>
      </el-menu-item>
      <el-menu-item index="/domestic">
        <i class="el-icon-data-line"></i>
        <span slot="title">国内数据总览</span>
      </el-menu-item>
      <el-menu-item index="/foreign">
        <i class="el-icon-place"></i>
        <span slot="title">国外数据总览</span>
      </el-menu-item>
      <el-submenu index="/domestic-details">
        <template slot="title">
        <i class="el-icon-office-building"></i>
        <span slot="title">国内疫情</span>
        </template>
        <el-menu-item-group>
          <span slot="title">各省市区情况</span>
          <el-menu-item
          v-for="item in domesticArray"
          :key="item.provinceShortName"
          :index="'/domestic-details/'+item.provinceShortName">{{item.provinceName}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/foreign-details">
        <template slot="title">
          <i class="el-icon-guide"></i>
          <span slot="title">国外疫情</span>
        </template>
        <el-menu-item-group>
          <span slot="title">疫情重点国家情况</span>
          <el-menu-item
          v-for="item in foreignArray"
          :key="item.provinceName"
          :index="'/foreign-details/'+item.provinceName">{{item.provinceName}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        isCollapse: false,
        domesticArray:[],
        foreignArray:[]
      };
    },
    computed: {},
    watch: {},
    methods: {
      getHashMap(arr){
        let obj={};
        for(let item of arr){
          obj[item.provinceShortName || item.provinceName]=item;
        }
        return obj;
      }
    },
    created() {
      
    },
    mounted() {
      this.$dataService.domesticEpidemicInfo()
      .then(res=>{
        this.domesticArray=res.msg;
        sessionStorage.setItem("domesticInfo",JSON.stringify(this.getHashMap(this.domesticArray)));
        this.$dataService.foreignEpidemicInfo()
        .then(res=>{
          this.foreignArray=res.msg;
          sessionStorage.setItem("foreignInfo",JSON.stringify(this.getHashMap(this.foreignArray)));
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
  .aside{
    overflow: hidden;
    height: 92.7vh;
    overflow-y: scroll;
  }
</style>
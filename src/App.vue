<template>
  <div id="app">
    <el-container class="container">
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside>
          <Aside></Aside>
        </el-aside>
        <el-container>
          <el-main>
            <keep-alive><router-view/></keep-alive>
          </el-main>
          <el-footer>
            <Footer></Footer>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/home/Header';
import Aside from '@/components/home/Aside';
import Footer from '@/components/home/Footer';
export default {
  components:{
    Header,
    Aside,
    Footer
  }
}
</script>

<style lang="less">
@import './less/media.less';
*{
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
}
.el-header{
  padding: 0;
  min-width: 1200px;
}
.el-aside{
  box-shadow: 1px 0 5px 0 #ededf5;
  transform: translate3d(0, 0, 0);
}
.el-main{
  min-width: 880px;
}
.el-footer{
  height: 50px !important;
  padding: 0;
  min-width: 880px;
  overflow: hidden;
}
.container{
  height: 100%;
}
.el-menu{
  border: none;
}
</style>

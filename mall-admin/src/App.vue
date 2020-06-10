<template>
<div id="app">
  <router-view></router-view>
</div>
</template>


<style>
*{
  padding: 0;
  margin: 0;
}
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  

  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>

<script>
  export default {
    name:'App',
    data() {
      return {

      }
    },
    components:{
      
    }
  };
</script>

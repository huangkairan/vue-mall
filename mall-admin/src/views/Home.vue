<template>
  <div id="home">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router :default-openeds="['1', '1']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-order"></i>内容管理
            </template>
            <el-menu-item index="/goods">商品列表</el-menu-item>
            <el-menu-item index="/create">添加商品</el-menu-item>
            <el-menu-item index="/profile">个人信息</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{admin}}</span>
        </el-header>

        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      admin:''
    };
  },
  created(){
    this.getAdmin()
  },
  methods:{
    getAdmin(){
      console.log(this.$store.getters.isLogin)
      if(!this.$store.getters.isLogin){
        this.$router.push('/login')
      }else{
        this.admin = this.$store.state.admin
      }
    }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

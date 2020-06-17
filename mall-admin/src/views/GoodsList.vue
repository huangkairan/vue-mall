<template>
  <div>
    <el-table :data="tableData" height=500  style="width: 100%">
        <el-table-column prop="itemid" label="商品号" width="130"></el-table-column>
        <el-table-column prop="cateid" label="类别" width="70"></el-table-column>
        <el-table-column prop="created" label="日期" width="120">
          <template slot-scope="scope">
            {{scope.row.created | showDate}}
          </template>
        </el-table-column>
        <el-table-column prop="owner" label="商家" width="80"></el-table-column>
        <el-table-column prop="brand" label="品牌" width="80"></el-table-column>
        <el-table-column prop="itemname" label="商品名" width="120"></el-table-column>
        <el-table-column prop="price" label="价格" width="80"></el-table-column>
        <el-table-column
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
      </el-table>
  </div>
</template>

<script>
import { formatDate } from 'common/utils'
import { getGoodsList } from 'network/goodslist'
import { gCate } from 'network/goodslist'
export default {
  name : 'GoodsList',
  data() {
      return {
        tableData : []
      }
    },
  created(){
    this.getGoods()
    this.getCate()
  },
  methods:{
    getGoods(){
      getGoodsList().then(res=>{
        // console.log(res)
        res.forEach(element => {
          this.tableData.push(element)
          console.log(element)
        });
      })
      console.log(this.tableData)
    },
    getCate(){
      gCate().then(res=>{
        console.log(res)
      })
    }
  },
    filters: {
      showDate(value) {
      let date = new Date(value*1000);
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>

<style>
.el-table__header tr,
  .el-table__header th {
    padding: 0;
    height: 40px;
}
.el-table__body tr,
  .el-table__body td {
    padding: 0;
    height: 40px;
}
</style>
<template>
  <div class="left">
    <div class="top_title">
      <img src="../../static/img/tpp-1.png" />
      <h2>商家后台</h2>
    </div>
    <el-row class="tac">
      <el-col :span="4">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="goTo('/TableList')">电影列表</el-menu-item>
              <el-menu-item index="1-2" @click="goTo('/TableNew')">电影新增</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">订单管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">收藏管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">评价管理</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'TableNav',
    methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style>
  .top_title img{
    width: 30px;
    height: 30px;
    margin-left: 28px;
    display: inline-block;
    vertical-align: middle;
  }
  .top_title h2{
    font-size: 20px;
    font-weight: 100;
    color: #fff;
    display: inline-block;
    line-height: 66px;
    padding-left: 8px;
  }
  .top_title{
    width: 100%;
    background-color: #545c64;
    border-bottom: 1px solid #74808b;
    border-right: 1px solid #fff;
  }
  .el-col-4{
    width: 100%;
    height: 100%;
  }
  .el-menu{
    border-right: 0;
  }
  .left{
    width: 16%;
    float: left;
    height: 100%;
    background-color: #545c64;
  }
</style>

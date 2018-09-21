<template>
  <div class="xz">
    <ul>
      <li @click="show(1)" :class="{'show1':flag===1} " >西安<i class="iconfont icon-arrLeft-fill" ></i></li>
      <li @click="show(2)" :class="{'show1':flag===2}">推荐排序<i class="iconfont icon-arrLeft-fill"></i></li>
      <li @click="show(3)" :class="{'show1':flag===3}">不限<i class="iconfont icon-arrLeft-fill" ></i></li>
    </ul>
    <div class="cityy" v-show="flag===1">
      <div id="showLetter" class="showLetter"><span>A</span></div>
      <!--城市索引查询-->
      <div class="letter">

      </div>
      <!--城市列表-->
      <div class="container1">
        <div class="city">

        </div>
      </div>
    </div>
    <div class="tjpx" v-show="flag===2">
      <p>最新上架</p>
      <p>时间最早</p>
      <p>推荐排序</p>
      <i class="iconfont icon-duigou"></i>
    </div>

    <div class="tjpx" v-show="flag===3">
      <p>不限</p>
      <p>今天</p>
      <p>明天</p>
      <p>本周末</p>
      <p>一月内</p>
      <p>一周内</p>
      <i class="iconfont icon-duigou"></i>
    </div>
  </div>
</template>

<script>
  import "../../assets/js/zepto"
import "../../assets/js/city"
import "../../assets/css/style.css"
    export default {
        name: "PerXz",
      data(){
          return{
            flag:0,

          }
      },
      methods:{
          show(f){
            if(this.flag===f ){
              this.flag=0;

            }else {
              this.flag = f;

            }
          }

      }
    }

</script>

<style scoped>

  .xz{
    height: 100%;
    /*background: red;*/

  }
  .xz ul{
    width: 100%;
    height: 1rem;
    /*background: skyblue;*/
    display: flex;
    /*justify-content: space-around;*/
    align-items: center;
    border-bottom: 0.01rem solid #ccc;
    border-top: 0.01rem solid #ccc;
  }
  .xz ul li{
    width: 33%;
    text-align: center;
    border-right: 0.01rem solid #ccc;
    color: #737573;

  }
  .xz  ul li:nth-child(3){
    border: none;
  }
  .xz ul li i{
    font-size: 0.35rem;
    margin-left: 0.1rem;
  }
  .cityy{
    height: 15rem;

overflow: scroll;
  }
  .tjpx{
    /*height: 5rem;*/
    /*background: white;*/
    padding-left:0.3rem ;
    position: relative;
  }
  .tjpx p{
    color: #737573;
    font-size: 0.35rem;
    line-height: 1.2rem;
    border-bottom: 0.01rem solid #ccc;
  }
  .tjpx i{
    font-size: 0.4rem;
    position: absolute;
    bottom: 0.35rem;
    right: 0.35rem;
    color: red;
  }
  .xz ul .show1{
  color: red;
}
  /*.xz ul li .show2{*/
    /*display: none;*/
  /*}*/
  /*.xz ul li .show3{*/
    /*display: none;*/
  /*}*/

</style>

<template>
  <div class="heade">
    <div class="head">
      <p>演出</p>
    </div>
    <div class="search">
      <a><i class="iconfont icon-sousuo"></i>搜索明星,演出比赛,场馆</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PerHeader"
    }
</script>

<style scoped>
.heade{
  width: 100%;
  position: fixed;
  top: 0;

}
  .head p{
    line-height: 1.2rem;
    text-align: center;
    font-size: 0.4rem;
    font-weight: 600;
    color: #000;
    border-bottom: 0.02rem solid #efefef;
  }
  .search{
    height: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0.01rem solid #efefef;
  }
  .search a{
    display: block;
    width: 90%;
    line-height: 0.8rem;
    background: #f7f7f7;
    text-align: center;
    border-radius: 0.5rem;
    font-size: 0.32rem;
    color: #9c9a9c;
  }
  .search a i{
    font-size: 0.35rem;
    color: #cecfce;
    margin-right: 0.1rem;
  }
</style>

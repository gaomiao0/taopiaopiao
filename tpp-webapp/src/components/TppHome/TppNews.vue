<template>
  <div class="choice_two">
    <h2 class="news_tit">{{tppres.head}}</h2>
    <a class="news_pic" href="javascript:;">
      <img :src=tppres.pic >
      <img :src=tppres.pic1 >
      <img :src=tppres.pic2 >
    </a>
    <p class="msg">
      <span class="message">
        <i>{{tppres.name}}</i>
        <i>{{tppres.msg}}</i>
        <i>{{tppres.time}}</i>
      </span>
      <i class="iconfont icon-cuo"></i>
    </p>
  </div>
</template>

<script>
  export default {
    name: "TppNews",
    props:["tppres"]
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  c(k){
    (k/75)rem
  }
  .choice_two{
    padding 0 c(27)
  }
  .news_tit{
    font-size c(30)
    padding c(27) 0
  }
  .news_pic img{
    width c(227)
    height c(170)
  }
  .news_pic{
    display flex
    justify-content space-between
  }
  .msg{
    font-size c(22)
    color #919191
    display flex
    justify-content space-between
    line-height c(62)
    border-bottom 1px solid #f4f4f4
  }
  .message i{
    padding-right c(16)
  }
  .icon-cuo{
    font-size c(30)
  }
</style>

<template>
  <div class="choice_three">
    <h2 class="news_tit">{{tppvideo.head}}</h2>
    <video controls :poster=tppvideo.img class="video_one">
      <source :src=tppvideo.mp4>
    </video>
    <p class="msg">
      <span class="message">
        <i>{{tppvideo.name}}</i>
        <i>{{tppvideo.msg}}</i>
        <i>{{tppvideo.time}}</i>
      </span>
      <i class="iconfont icon-cuo"></i>
    </p>
  </div>
</template>

<script>
  export default {
    name: "TppVideo",
    props:["tppvideo"]
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  c(k){
    (k/75)rem
  }
  .choice_three{
    padding 0 c(27)
  }
  .news_tit{
    font-size c(30)
    padding c(27) 0
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
  .video_one{
    width c(696)
    height c(392)
  }
</style>

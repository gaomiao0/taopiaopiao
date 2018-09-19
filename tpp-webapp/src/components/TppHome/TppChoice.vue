<template>
  <div class="choice_one">
    <a class="all" href="javascript:;">
      <p class="all_text">
        <span class="all_tit">{{tppnatural.head}}</span>
        <span class="msg">
          <i class="message">
            <i>{{tppnatural.name}}</i>
            <i>{{tppnatural.msg}}</i>
            <i>{{tppnatural.time}}</i>
          </i>
          <i class="iconfont icon-cuo"></i>
        </span>
      </p>
      <img class="all_pic" :src=tppnatural.img />
    </a>
  </div>
</template>

<script>
  export default {
    name: "TppChoice",
    props:["tppnatural"]
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  c(k){
    (k/75)rem
  }
  a:link{text-decoration: none!important;  }
  a:visited{ text-decoration: none !important;}
  a:hover{text-decoration: none!important;  }
  a:active{text-decoration: none!important;  }
  a:focus{text-decoration: none!important;  }
  .choice_one{
    padding 0 c(27)
  }
  .all{
    display flex
    justify-content space-between
    border-bottom 1px solid #f4f4f4
    color #090909
    padding c(27) 0
  }
  .all_pic{
    width c(227)
    height c(170)
  }
  .all_tit{
    font-size c(30)
    line-height c(46)
    width c(440)
  }
  .all_text{
    display flex
    flex-direction column
    justify-content space-between
  }
  .msg{
    font-size c(22)
    color #919191
    display flex
    justify-content space-between
  }
  .message i{
    padding-right c(16)
  }
  .icon-cuo{
    font-size c(30)
  }
</style>

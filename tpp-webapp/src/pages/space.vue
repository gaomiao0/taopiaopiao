<template>
  <div class="bigbox">
    <div class="header">
      <a class="header_left" href="javascript:;">
        <i class="iconfont icon-arrow-right-copy"></i>
      </a>
      <span></span>
      <a class="header_right" href="javascript:;">
        <i class="iconfont icon-paihangbang"></i>
      </a>
    </div>
    <div class="cinema">
      <div class="cinema_left">
        <h1>西安奥斯卡巨幕国际影城（唐延店）</h1>
        <p>高新区唐延11号禾盛京广中心T-11商业3楼</p>
        <p>
          <span>退票</span>
          <span>改签</span>
          <span>影城卡</span>
          <span>3D眼镜收费</span>
          <span>观影小食</span>
          <span>中国巨幕</span>
          <span>4D厅</span>
        </p>
      </div>
      <a class="address" href="javascript:;">
        <img src="../assets/img/d-76.jpg" />
        <i class="iconfont icon-dingwei"></i>
      </a>
    </div>
    <div class="favorable">
      <a href="javascript:;">
        <span>影城卡</span>
        <span>开卡后购票更优惠</span>
      </a>
      <a class="fav_look" href="javascript:;">
        <span>观影小食</span>
        <span>小食25.3元起</span>
      </a>
      <a class="fav_ruby" href="javascript:;">
        <span>10元观影红包</span>
        <span>联通积分兑换专区</span>
      </a>
    </div>
    <TppSpaceSlider id="samllbox"></TppSpaceSlider>
  </div>
</template>

<script>
  import TppSpaceSlider from "../components/TppSpace/TppSpaceSlider";

  export default {
    name: "space",
    components: {TppSpaceSlider}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  c(k){
    (k/75)rem
  }
  .header{
    line-height c(84)
    display flex
    justify-content space-between
    padding 0 c(26)
    position fixed
    top 0
    background-color #fff
    width 93%
    z-index 100
  }
  .header i{
    font-size c(40)
  }
  .icon-arrow-right-copy{
    color #0c0c0c
  }
  .icon-paihangbang{
    color #fae122
  }
  .cinema{
    margin-top c(90)
    padding 0 c(26)
    display flex
    justify-content space-between
    align-items center
    a{
      position relative
      img{
        width c(62)
        height c(62)
        border-radius 50%
      }
      i{
        font-size c(28)
        color #343332
        position absolute
        top c(18)
        left c(18)
      }
    }
  }
  .cinema_left{
    h1{
      font-size c(32)
      color #000
      line-height c(60)
      font-weight 600
    }
    p{
      font-size c(24)
      color #686868
      line-height c(40)
    }
    p{
      span{
        font-size c(18)
        color #53b3ff
        border:1px solid #53b3ff
        border-radius c(6)
        padding c(4) c(6)
      }
    }
  }
  .favorable{
    display flex
    justify-content space-between
    margin c(36) 0 c(26)
    padding 0 c(26)
    a{
      width 30%
      border 1px solid #d5e0db
      border-radius c(8)
      background-color #f4fbf3
      color #59ca67
      display flex
      flex-direction column
      text-align center
      padding c(10) 0
      span{
        font-size c(26)
        line-height c(32)
      }
      span{
        font-size c(18)
        width 100%
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
      }
    }
    .fav_look{
      color #ff3c7e
      border 1px solid #e9e1e4
      background-color #fff7fa
    }
    .fav_ruby{
      color #55a0cf
      border 1px solid #d9dee2
      background-color #f3f8fc
    }
  }
</style>

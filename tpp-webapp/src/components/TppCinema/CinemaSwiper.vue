<template>
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a class="swiper_img" href="javascript:;">
              <img src="../../assets/img/gb1.png" />
            </a>
          </div>
          <div class="swiper-slide">
            <a class="swiper_img" href="javascript:;">
              <img src="../../assets/img/gb2.png" />
            </a>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
</template>

<script>
  import Swiper from "swiper"
    export default {
        name: "swiper",
      mounted(){
        new Swiper ('.swiper-container', {
          loop: true,
          autoplay:true,
          pagination: {
            el: '.swiper-pagination'
          }
        })
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
c(k){
  (k/75)rem
}
  .banner{
    height c(236)
    margin-top c(284)
    padding-right 2px
    padding-top 2px
    img{
      width 100%
      height c(236)
    }
    .swiper-pagination-bullet-active{
      background-color #fff
    }
    .swiper-container .swiper-pagination{
      bottom (12/75)rem
    }
    .swiper-pagination-bullet{
      background-color #fff
    }
  }
</style>

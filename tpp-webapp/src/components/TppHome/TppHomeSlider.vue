<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a class="swiper_img" href="javascript:;">
            <img src="../../assets/img/d-1.jpg" />
          </a>
        </div>
        <div class="swiper-slide">
          <a class="swiper_img" href="javascript:;">
            <img src="../../assets/img/d-2.jpg" />
          </a>
        </div>
        <div class="swiper-slide">
          <a class="swiper_img" href="javascript:;">
            <img src="../../assets/img/d-3.jpg" />
          </a>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  export default {
    name: "TppHomeSlider",
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
  .swiper_img img{
    width (750/75)rem
    height (450/75)rem
  }
  .swiper-pagination-bullet-active{
      background-color #fff
   }
  .swiper-container .swiper-pagination{
    bottom (40/75)rem
  }
  .swiper-pagination-bullet{
    background-color #fff
  }
</style>

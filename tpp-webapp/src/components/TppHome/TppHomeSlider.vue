<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="s in swiper" :key="s.id">
          <a class="swiper_img" href="javascript:;">
            <img :src=s.img />
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
    props:["swiper"],
    mounted(){
      setTimeout(function () {
        new Swiper ('.swiper-container', {
          loop: true,
          autoplay:true,
          pagination: {
            el: '.swiper-pagination'
          }
        })
      },20)
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .swiper_img img{
    width 100%
    height 100%
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

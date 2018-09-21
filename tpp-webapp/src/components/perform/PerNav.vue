<template>
  <div class="nav">
  <div class="container">

    <div class="swiper-container swiper1">

      <div class="swiper-wrapper">

        <div class="swiper-slide selected" >全部</div>

        <div class="swiper-slide">演唱会</div>

        <div class="swiper-slide">话剧歌剧</div>

        <div class="swiper-slide">音乐会</div>

        <div class="swiper-slide">曲苑杂坛</div>

        <div class="swiper-slide">舞蹈芭蕾</div>

        <div class="swiper-slide">体育比赛</div>

        <div class="swiper-slide">儿童亲子</div>

        <div class="swiper-slide">展览休闲</div>

        <div class="swiper-slide">动漫</div>

      </div>
<PerXz></PerXz>
    </div>

    <div class="swiper-container swiper2">

      <div class="swiper-wrapper">

        <div class="swiper-slide swiper-no-swiping">

          <div style="width: 100%;height: 100%;"><PerSec></PerSec></div>

        </div>

        <div class="swiper-slide swiper-no-swiping"><PerSec></PerSec></div>

        <div class="swiper-slide swiper-no-swiping"><PerSec></PerSec></div>

        <div class="swiper-slide swiper-no-swiping"><PerSec></PerSec></div>

        <div class="swiper-slide swiper-no-swiping"><PerSec></PerSec></div>

        <div class="swiper-slide swiper-no-swiping"><PerSec></PerSec></div>

        <div class="swiper-slide swiper-no-swiping"><PerSec></PerSec></div>

        <div class="swiper-slide swiper-no-swiping"><PerSec></PerSec></div>

        <div class="swiper-slide swiper-no-swiping"><PerSec></PerSec></div>

        <div class="swiper-slide swiper-no-swiping"><PerSec></PerSec></div>

      </div>

    </div>

  </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import PerSec from "./PerSec";
  import PerXz from "./PerXz";

    export default {
        name: "PerNav",
      components: {PerXz, PerSec},
    }
  $(function() {

    function setCurrentSlide(ele, index) {

      $(".swiper1 .swiper-slide").removeClass("selected");

      ele.addClass("selected");

    }

    var swiper1 = new Swiper('.swiper1', {

      slidesPerView: 5.5,

      paginationClickable: true,

      spaceBetween: 10,

      freeMode: true,

      loop: false,

      onTab: function(swiper) {

        var n = swiper1.clickedIndex;

      }

    });

    swiper1.slides.each(function(index, val) {

      var ele = $(this);

      ele.on("click", function() {

        setCurrentSlide(ele, index);

        swiper2.slideTo(index, 500, false);

      });

    });

    var swiper2 = new Swiper('.swiper2', {

      direction: 'horizontal',

      loop: false,

      autoHeight: true,

      onSlideChangeEnd: function(swiper) {

        var n = swiper.activeIndex;

        setCurrentSlide($(".swiper1 .swiper-slide").eq(n), n);

        swiper1.slideTo(n, 500, false);

      }

    });

  });
</script>

<style scoped>

  .nav{
    width: 100%;
    position: fixed;
    top:2.4rem;
  }
  swiper-container{margin:0 auto;position:relative;overflow:hidden;z-index:1}
  .swiper-container-no-flexbox .swiper-slide{float:left}
  .swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-moz-box-orient:vertical;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}
  .swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-transition-property:-webkit-transform;-moz-transition-property:-moz-transform;-o-transition-property:-o-transform;-ms-transition-property:-ms-transform;transition-property:transform;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}
  .swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0,0,0);}
  /*body { min-width: 320px; max-width: 640px; margin: 0 auto; color: #333; padding: 0;  text-align: center; }*/

  .container { /*width: 100%;*/
    border-top: 0.01rem solid #ccc;
  }

  .swiper1 { width: 100%; }

  .swiper1 .selected { color: #ff4d75 !important; border-bottom: 0.02rem solid #ff4d75; }

  .swiper1 .swiper-slide { text-align: center; font-size: 0.32rem; height: 1.2rem;
    color: #737573; /* Center slide text vertically */

    display: -webkit-box; display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-box-pack: center; -ms-flex-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -ms-flex-align: center; -webkit-align-items: center; align-items: center; cursor: pointer; }

  .swiper2 { width: 100%; }

  .swiper2 .swiper-slide { height: calc(100vh - 50px);  color: #fff; text-align: center; box-sizing: border-box !important; overflow-x: hidden !important; }
</style>

<template>
    <div>
      <div class="home_search">
        <a class="hh_address addtop" href="javascript:;">
          <span>西安</span>
          <u class="trangle anotrg"></u>
        </a>
        <p class="search_top">
          <input type="text" class="inp" placeholder="搜影片、影院、影人">
          <i class="iconfont icon-search"></i>
        </p>
      </div>
      <div class="home_hea">
        <a class="hh_address" href="javascript:;">
          <span>西安</span>
          <u class="trangle"></u>
        </a>
        <a class="hh_little" href="javascript">
          <i class="iconfont icon-rili"></i>
          <i class="iconfont icon-search"></i>
        </a>
      </div>
      <TppHomeSlider class="home_slider"></TppHomeSlider>
      <TppMovie class="complete"></TppMovie>
    </div>
</template>

<script>
    import TppHomeSlider from "../components/TppHome/TppHomeSlider";
    import TppMovie from "../components/TppHome/TppMovie";

    export default {
      name: "home",
      components: {TppMovie, TppHomeSlider},
      methods:{
        getScroll(){
          $(document).scroll(function (){
            // console.log(document.documentElement.scrollTop)
            var scrollTop = document.documentElement.scrollTop
            if( scrollTop>100){
              $('.home_hea').fadeOut(800);
              $('.home_search').slideDown(500).css({"opacity":"1"});
              $('.search_top').animate({"width":"592"},10);
            }else{
              $('.home_hea').fadeIn(800);
              $('.home_search').slideUp(500);
              $('.search_top').animate({"width":"0"},10);
            }
          })
        }
      },
      created(){
        this.getScroll()
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  c(k){
    (k/75)rem
  }
  .home_hea{
    position fixed
    top (20/75)rem
    left (24/75)rem
    z-index 10
    display flex
    justify-content space-between
    align-items center
    width c(726)
  }
  .home_hea a{
    color #fff
  }
  .hh_address{
    font-size (26/75)rem
    display flex
    align-items center
  }
  .trangle{
    width 0
    border c(8) solid transparent
    border-top-color #fff
    margin-left c(8)
    margin-top c(8)
  }
  .hh_little{
    padding-right c(30)
  }
  .hh_little i{
    font-size c(36)
    padding-left c(24)
  }
  .complete{
    border-top-left-radius c(20)
    border-top-right-radius c(20)
    position absolute
    top c(420)
    padding c(47) 0 c(27)
    background-color #fff
    width c(750)
    z-index 100
  }
  .home_slider{
    position fixed
    top 0
    width c(750)
  }
  .home_search{
    padding c(12) c(25)
    display flex
    justify-content space-between
    background-color #fff
    width c(700)
    position fixed
    top 0
    z-index 999
    opacity 0
    border-bottom 1px solid #e8e8e8
  }
  .inp{
    padding c(16) c(16) c(16) c(56)
    background-color #f5f5f5
    border-radius c(12)
    width c(520)
  }
  .addtop{
    color #141414
  }
  .search_top{
    position relative
  }
  .search_top .icon-search{
    font-size c(30)
    color #7a797f
    position absolute
    top c(14)
    left c(16)
  }
  .anotrg{
    border-top-color  #141414
  }
  .bscroll-container{
    height  c(1000)
  }

</style>

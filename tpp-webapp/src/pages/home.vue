<template>
    <div>
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
      <TppHomeSlider></TppHomeSlider>
      <TppSection></TppSection>
    </div>
</template>

<script>
    import TppHomeSlider from "../components/TppHome/TppHomeSlider";
    import TppSection from "../components/TppHome/TppSection";
    export default {
        name: "home",
      components: {TppSection, TppHomeSlider}
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  c(k){
    (k/75)rem
  }
  .home_hea{
    position absolute
    top (20/75)rem
    left (24/75)rem
    z-index 10
    display flex
    justify-content space-between
    align-items center
    width 100%
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
    padding-right c(40)
  }
  .hh_little i{
    font-size c(36)
    padding-left c(24)
  }
</style>

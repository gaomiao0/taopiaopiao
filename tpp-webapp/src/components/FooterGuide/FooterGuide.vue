<template>
    <div class="guidefooter">
      <a href="javascript:;" class="guid_item guid1" :class="{on: '/home'===$route.path}" @click="goTo('/home')">
        <span class="item_icon">
          <i class="home_img home"></i>
          <span class="span_box">首页</span>
        </span>
      </a>
      <a href="javascript:;" class="guid_item" :class="{on: '/movie'===$route.path}" @click="goTo('/movie')">
        <span class="item_icon">
          <i class="home_img movie"></i>
          <span class="span_box">电影</span>
        </span>
      </a>
      <a href="javascript:;" class="guid_item" :class="{on: '/tqvideo'===$route.path}" @click="goTo('/tqvideo')">
        <span class="item_icon">
          <i class="home_img tqsp"></i>
          <span class="span_box">淘气视频</span>
        </span>
      </a>
      <a href="javascript:;" class="guid_item" :class="{on: '/perform'===$route.path}" @click="goTo('/perform')">
        <span class="item_icon">
          <i class="home_img yc"></i>
          <span class="span_box">演出</span>
        </span>
      </a>
      <a href="javascript:;" class="guid_item" :class="{on: '/mytp'===$route.path}" @click="goTo('/mytp')">
        <span class="item_icon">
          <i class="home_img wd"></i>
          <span class="span_box">我的</span>
        </span>
      </a>
    </div>
</template>

<script>
    export default {
      methods:{
        goTo(path){
          this.$router.replace(path)
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
      .guidefooter
        background white
        a:link{text-decoration: none!important;  }
        a:visited{text-decoration: none!important;  }
        a:hover{text-decoration: none!important;  }
        a:active{text-decoration: none!important;  }
        a:focus{text-decoration: none!important;  }
        border-bottom 1px solid #e8a6a5
        border-top 1px solid #e8a6a5
        position fixed
        bottom 0
        width 100%
        height (105/75)rem
        display flex
        justify-content space-around
        align-items center
        z-index 999
        .guid_item
          text-align center
          color #2f2f2f
        .span_box
          margin-top (10/75)rem
          display block
          font-size (20/75)rem
      .home_img
        display inline-block
        height (40/75)rem
        width (40/75)rem
        background-size (40/75)rem (40/75)rem
      .home
        background url("../../assets/img/2.png") no-repeat
        background-size (40/75)rem (40/75)rem
      .movie
        background url("../../assets/img/4.png") no-repeat
        background-size (40/75)rem (40/75)rem
      .tqsp
        background url("../../assets/img/6.png") no-repeat
        background-size (40/75)rem (40/75)rem
      .yc
        background url("../../assets/img/8.png") no-repeat
        background-size (40/75)rem (40/75)rem
      .wd
        background url("../../assets/img/10.png") no-repeat
        background-size (40/75)rem (40/75)rem
      .on
        .item_icon
          .home
            background url("../../assets/img/1.png") no-repeat
            background-size (40/75)rem (40/75)rem
      .on
        .item_icon
          .span_box
            color #ff4155
      .on
        .item_icon
          .movie
            background url("../../assets/img/3.png") no-repeat
            background-size (40/75)rem (40/75)rem
      .on
        .item_icon
          .tqsp
            background url("../../assets/img/5.png") no-repeat
            background-size (40/75)rem (40/75)rem
      .on
        .item_icon
          .yc
            background url("../../assets/img/7.png") no-repeat
            background-size (40/75)rem (40/75)rem
      .on
        .item_icon
          .wd
            background url("../../assets/img/9.png") no-repeat
            background-size (40/75)rem (40/75)rem
</style>

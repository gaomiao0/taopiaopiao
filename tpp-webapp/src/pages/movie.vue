<template>
    <div >
      <div class="movie_header">
        <div><span>西安</span><i class="iconfont icon-arrLeft-fill"></i></div>
        <div><span class="on">电影</span><span>影院</span></div>
        <div><i class="iconfont icon-saoyisao"></i><i class="iconfont icon-search"></i></div>
      </div>
      <div class="movie_section">
        <sticky :check-sticky-support="false" :offset="0">
          <tab :line-width=4 active-color="#e93d52" custom-bar-width="42px">
            <tab-item :selected="demo4 === item" v-for="(item, index) in list4" @click="demo4 = item" :key="index">{{item}}</tab-item>
          </tab>
        </sticky>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="section_con">
              <div class="con_header">
            <span class="span_left">
              <i class="iconfont icon-zhuzhuangtu"></i>
              <span>实时票房</span>
            </span>
                <span class="span_right">
              <span>今日大盘</span>
              <span class="pfcolor">2245.5万</span>
              <i class="iconfont icon-up1-copy"></i>
            </span>
              </div>
              <div class="banner"><img src="../../static/img/banner.jpg" alt=""></div>
              <div class="movie_lists">
                <div class="movie_list">
                  <a href="#"><img src="../../static/img/d-7.jpg" alt=""></a>
                  <div class="list_right">
                    <div class="right_left">
                      <span class="movie_title"><span>反贪风暴3</span><span><i>2d</i><i>中国巨幕</i></span></span>
                      <span class="grade">淘票票分<i>8.6</i></span>
                      <span class="zhuyan">导演:林德禄</span>
                      <span class="zhuyan">主演：古天乐，张智霖，郑嘉颖</span>
                      <span class="fenlei"><span>今日最热</span><span>一周最热</span></span>
                    </div>
                    <span class="right_right">购票</span>
                  </div>
                </div>
                <div class="movie_list">
                  <a href="#"><img src="../../static/img/d-7.jpg" alt=""></a>
                  <div class="list_right">
                    <div class="right_left">
                      <span class="movie_title"><span>反贪风暴3</span><span><i>2d</i><i>中国巨幕</i></span></span>
                      <span class="grade">淘票票分<i>8.6</i></span>
                      <span class="zhuyan">导演:林德禄</span>
                      <span class="zhuyan">主演：古天乐，张智霖，郑嘉颖</span>
                      <span class="fenlei"><span>今日最热</span><span>一周最热</span></span>
                    </div>
                    <span class="right_right">购票</span>
                  </div>
                </div>
                <div class="movie_list">
                  <a href="#"><img src="../../static/img/d-7.jpg" alt=""></a>
                  <div class="list_right">
                    <div class="right_left">
                      <span class="movie_title"><span>反贪风暴3</span><span><i>2d</i><i>中国巨幕</i></span></span>
                      <span class="grade">淘票票分<i>8.6</i></span>
                      <span class="zhuyan">导演:林德禄</span>
                      <span class="zhuyan">主演：古天乐，张智霖，郑嘉颖</span>
                      <span class="fenlei"><span>今日最热</span><span>一周最热</span></span>
                    </div>
                    <span class="right_right">购票</span>
                  </div>
                </div>
                <div class="movie_list">
                  <a href="#"><img src="../../static/img/d-7.jpg" alt=""></a>
                  <div class="list_right">
                    <div class="right_left">
                      <span class="movie_title"><span>反贪风暴3</span><span><i>2d</i><i>中国巨幕</i></span></span>
                      <span class="grade">淘票票分<i>8.6</i></span>
                      <span class="zhuyan">导演:林德禄</span>
                      <span class="zhuyan">主演：古天乐，张智霖，郑嘉颖</span>
                      <span class="fenlei"><span>今日最热</span><span>一周最热</span></span>
                    </div>
                    <span class="right_right">购票</span>
                  </div>
                </div>
                <div class="movie_list">
                  <a href="#"><img src="../../static/img/d-7.jpg" alt=""></a>
                  <div class="list_right">
                    <div class="right_left">
                      <span class="movie_title"><span>反贪风暴3</span><span><i>2d</i><i>中国巨幕</i></span></span>
                      <span class="grade">淘票票分<i>8.6</i></span>
                      <span class="zhuyan">导演:林德禄</span>
                      <span class="zhuyan">主演：古天乐，张智霖，郑嘉颖</span>
                      <span class="fenlei"><span>今日最热</span><span>一周最热</span></span>
                    </div>
                    <span class="right_right">购票</span>
                  </div>
                </div>
                <div class="movie_list">
                  <a href="#"><img src="../../static/img/d-7.jpg" alt=""></a>
                  <div class="list_right">
                    <div class="right_left">
                      <span class="movie_title"><span>反贪风暴3</span><span><i>2d</i><i>中国巨幕</i></span></span>
                      <span class="grade">淘票票分<i>8.6</i></span>
                      <span class="zhuyan">导演:林德禄</span>
                      <span class="zhuyan">主演：古天乐，张智霖，郑嘉颖</span>
                      <span class="fenlei"><span>今日最热</span><span>一周最热</span></span>
                    </div>
                    <span class="right_right">购票</span>
                  </div>
                </div>
                <div class="movie_list">
                  <a href="#"><img src="../../static/img/d-7.jpg" alt=""></a>
                  <div class="list_right">
                    <div class="right_left">
                      <span class="movie_title"><span>反贪风暴3</span><span><i>2d</i><i>中国巨幕</i></span></span>
                      <span class="grade">淘票票分<i>8.6</i></span>
                      <span class="zhuyan">导演:林德禄</span>
                      <span class="zhuyan">主演：古天乐，张智霖，郑嘉颖</span>
                      <span class="fenlei"><span>今日最热</span><span>一周最热</span></span>
                    </div>
                    <span class="right_right">购票</span>
                  </div>
                </div>
                <div class="movie_list">
                  <a href="#"><img src="../../static/img/d-7.jpg" alt=""></a>
                  <div class="list_right">
                    <div class="right_left">
                      <span class="movie_title"><span>反贪风暴3</span><span><i>2d</i><i>中国巨幕</i></span></span>
                      <span class="grade">淘票票分<i>8.6</i></span>
                      <span class="zhuyan">导演:林德禄</span>
                      <span class="zhuyan">主演：古天乐，张智霖，郑嘉颖</span>
                      <span class="fenlei"><span>今日最热</span><span>一周最热</span></span>
                    </div>
                    <span class="right_right">购票</span>
                  </div>
                </div>
                <div class="movie_list">
                  <a href="#"><img src="../../static/img/d-7.jpg" alt=""></a>
                  <div class="list_right">
                    <div class="right_left">
                      <span class="movie_title"><span>反贪风暴3</span><span><i>2d</i><i>中国巨幕</i></span></span>
                      <span class="grade">淘票票分<i>8.6</i></span>
                      <span class="zhuyan">导演:林德禄</span>
                      <span class="zhuyan">主演：古天乐，张智霖，郑嘉颖</span>
                      <span class="fenlei"><span>今日最热</span><span>一周最热</span></span>
                    </div>
                    <span class="right_right">购票</span>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div class="swiper-slide">Slide 2</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import { Tab, TabItem,Sticky } from 'vux'
    import Swiper from 'swiper'
    export default {
        name: "home",
        data(){
          return{
            list4: ['正在放映', '即将上映'],
            demo4: '正在放映',
            demoDisabled: 'A',
            index: 0,
          }
        },
        components: {
          Tab,
          TabItem,
          Sticky,
        },
      methods:{
        onItemClick (index) {
          console.log('on item click:', index)
        },
      },
      mounted(){
        var swiper = new Swiper('.swiper-container', {
          pagination: {
            // el: '.vux-tab',el: '.vux-tab',
            clickable: true,
          },
        });
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  c(p)
    (p/75)rem
  .movie_header
    height c(102)
    padding 0 c(35)
    display flex
    align-items center
    justify-content space-between
    div:nth-of-type(1)
      font-size c(30)
      color #000000
      i
        font-size c(18)
        margin-left c(20)
        color #000
    div:nth-of-type(2)
      font-size c(26)
      font-weight 800
      .on
        background #ff4d63
        color #ffffff
      span
        padding c(14) c(42)
        border 3px solid #f63d52
      span:nth-of-type(1)
        border-top-left-radius 8px
        border-bottom-left-radius 8px

      span:nth-of-type(2)
        border-top-right-radius 8px
        border-bottom-right-radius 8px
    div:nth-of-type(3)
      i
        color #000
        font-size c(36)
      i:nth-of-type(2)
        margin-left  c(30)
  .movie_section
    .section_con
      padding 0 c(30)
      .con_header
        height c(90)
        background #f8f8f8
        margin c(30) 0 c(10)
        border-radius c(17)
        display flex
        padding 0 c(22) 0 c(26)
        justify-content space-between
        align-items center
        .span_left
          color #141414
          i
            font-size c(30)
            margin-right c(18)
          span
            font-size c(26)
        .span_right
          font-size c(26)
          color #636363
          .pfcolor
            color #fd2f47
            margin-left c(16)
          i
            font-size c(10)
            vertical-align middle
      .banner
        margin-bottom c(10)
        img
          height 100%
          width 100%
      .movie_lists
        .movie_list
          padding c(33) 0
          display flex
          border-bottom 1px solid #eaeaea
          img
            width c(138)
            height c(200)
            margin-right c(26)
            border-radius c(10)
          .list_right
            width 100%
            display flex
            justify-content space-between
            align-items center
            .right_left
              display flex
              flex-direction column
              .movie_title
                font-size c(32)
                font-weight 800
                span:nth-of-type(2)
                  margin-left c(18)
                  i:nth-of-type(1)
                    font-size c(16)
                    color white
                    padding c(4)
                    background #a8abb4
                    border 1px solid #f5f5f6
                    box-sizing border-box
                  i:nth-of-type(2)
                    font-size c(18)
                    color #929292
                    padding c(4)
                    border 1px solid #cdced0
                    box-sizing border-box
              .grade
                font-size c(24)
                color #0d0d0d
                margin c(20) 0
                i
                  font-weight 800
                  color #fba44b
                  margin-left  8px
              .zhuyan
                font-size c(24)
                color #717171
                margin-bottom c(21)
              .fenlei
                span
                  padding c(8)
                  border-radius 6px
                  font-size c(16)
                span:nth-of-type(1)
                  color #c56977
                  border 2px solid #c56977
                  margin-right c(3)
                span:nth-of-type(2)
                  color #fe9b37
                  border 2px solid #fe9b37
            .right_right
              width c(102)
              height c(58)
              line-height c(58)
              text-align center
              background #ff6583
              font-size c(22)
              color #ffffff
              border-radius c(28)

  .vux-sticky-box
    height c(77)
    .vux-tab-wrap
      height c(77)
      padding-top 0
      .vux-tab-container
        height c(77)
        .vux-tab
          height c(77)
          .vux-tab-item
            font-size c(26)
            line-height c(77)
</style>

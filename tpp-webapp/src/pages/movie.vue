<template>
    <div class="movie_vue">
      <div class="movie_header">
        <div><router-link to="/city"><span class="xian">西安</span><i class="iconfont icon-arrLeft-fill"></i></router-link></div>
        <div><span class="on">电影</span><span>影院</span></div>
        <div><i class="iconfont icon-saoyisao"></i><i class="iconfont icon-search"></i></div>
      </div>
      <div class="movie_section">
        <div>
          <sticky :check-sticky-support="false" :offset="0">
            <tab :line-width=4 active-color='#f53348' v-model="index" bar-active-color="#fc4259" custom-bar-width="42px">
              <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
            </tab>
          </sticky>
          <swiper v-model="index" :aspect-ratio="4" :show-dots="false">
            <swiper-item>
              <div class="tab-swiper vux-center">
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
                    <div class="movie_list" v-for="movie in movies">
                      <a href="#"><img :src=movie.img alt=""></a>
                      <router-link class="movie_msg" v-bind:to="'/detail/'+movie.id">
                        <div class="list_right">
                          <div class="right_left">
                            <span class="movie_title"><span>{{movie.title}}</span><span><i v-if="movie.type">{{movie.type}}</i><i  v-if="movie.style">{{movie.style}}</i></span></span>
                            <span class="grade" v-if="movie.score">淘票票分<i>{{movie.score}}</i></span>
                            <span class="styleshow" v-if="movie.want"><i>{{movie.want}}</i>人想看&nbsp;|&nbsp;<i>{{movie.show}}</i></span>
                            <span class="zhuyan">导演:<span>{{movie.director}}</span></span>
                            <span class="zhuyan">主演：<span>{{movie.protagonist[0]}}</span>&nbsp;<span>{{movie.protagonist[1]}}</span>&nbsp;<span>{{movie.protagonist[2]}}</span></span>
                            <span class="fenlei"><span v-if="movie.dayhot">{{movie.dayhot}}</span><span v-if="movie.weekhot">{{movie.weekhot}}</span><span v-if="movie.praise">{{movie.praise}}</span></span>
                          </div>
                          <span class="right_right" :style="{background:movie.color}">{{movie.showstyle}}</span>
                        </div>
                        <div class="list_bottom" v-if="movie.fragment"><i>{{movie.fragment}}</i>&nbsp;&nbsp;|&nbsp;&nbsp;<span>{{movie.fragmentmsg}}</span></div>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-item>
            <swiper-item>
              <div class="tab-swiper vux-center">
                <div class="two_box">
                  <div class="ygp">
                    <h1>预告片推荐</h1>
                    <div class="sp">
                      <a href="#"><img src="../assets/img/tcdgm.png" alt=""></a>
                      <a href="#"><img src="../assets/img/tcdgm.png" alt=""></a>
                      <a href="#"><img src="../assets/img/tcdgm.png" alt=""></a>
                      <a href="#"><img src="../assets/img/tcdgm.png" alt=""></a>
                    </div>
                  </div>
                  <div class="ygp">
                    <h1>近期最受期待</h1>
                    <div class="sp sps">
                      <a href="#">
                        <img src="../assets/img/zrqk.png" alt="">
                        <span>昨日青空</span>
                        <span>10月26日</span>
                      </a>
                      <a href="#">
                        <img src="../assets/img/y.png" alt="">
                        <span>影</span>
                        <span>9月30日</span>
                      </a>
                      <a href="#">
                        <img src="../assets/img/zrqk.png" alt="">
                        <span>昨日青空</span>
                        <span>10月26日</span>
                      </a>
                      <a href="#">
                        <img src="../assets/img/y.png" alt="">
                        <span>影</span>
                        <span>9月30日</span>
                      </a>
                    </div>
                  </div>
                  <div class="ygp .movie_section">
                    <h1>9月30日 周日</h1>
                    <div class="section_con" style="padding: 0px;">
                      <div class="movie_msg">
                        <div class="movie_lists">
                          <div class="movie_list" v-for="movie in movies">
                            <a href="#"><img :src=movie.img alt=""></a>
                            <router-link class="movie_msg" v-bind:to="'/detail/'+movie.id">
                              <div class="list_right">
                                <div class="right_left">
                                  <span class="movie_title"><span>{{movie.title}}</span><span><i v-if="movie.type">{{movie.type}}</i><i  v-if="movie.style">{{movie.style}}</i></span></span>
                                  <span class="grade" v-if="movie.score">淘票票分<i>{{movie.score}}</i></span>
                                  <span class="styleshow" v-if="movie.want"><i>{{movie.want}}</i>人想看&nbsp;|&nbsp;<i>{{movie.show}}</i></span>
                                  <span class="zhuyan">导演:<span>{{movie.director}}</span></span>
                                  <span class="zhuyan">主演：<span>{{movie.protagonist[0]}}</span>&nbsp;<span>{{movie.protagonist[1]}}</span>&nbsp;<span>{{movie.protagonist[2]}}</span></span>
                                  <span class="fenlei"><span v-if="movie.dayhot">{{movie.dayhot}}</span><span v-if="movie.weekhot">{{movie.weekhot}}</span><span v-if="movie.praise">{{movie.praise}}</span></span>
                                </div>
                                <span class="right_right" :style="{background:movie.color}">{{movie.showstyle}}</span>
                              </div>
                              <div class="list_bottom" v-if="movie.fragment"><i>{{movie.fragment}}</i>&nbsp;&nbsp;|&nbsp;&nbsp;<span>{{movie.fragmentmsg}}</span></div>
                            </router-link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-item>
          </swiper>
        </div>
      </div>
    </div>
</template>

<script>
    import { Tab, TabItem,Sticky,Swiper,SwiperItem } from 'vux'
    const list = () => ['正在热映', '即将上映']
    export default {
        name: "home",
        data(){
          return{
            list2: list(),
            demo2: '正在热映',
            movies:[],
            index: 0
          }
        },
        components: {
          Tab,
          TabItem,
          Sticky,
          Swiper,
          SwiperItem
        },
      methods:{
        onItemClick (index) {
          console.log('on item click:', index)
        },
        fetchMovies(){
          this.$http.get("http://localhost:3000/movie")
            .then((response)=> {
              this.movies = response.data
              // console.log(this.movies)
            })
        },
      },
      mounted(){

      },
      created(){
        this.fetchMovies();
      },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  c(p)
    (p/75)rem
  .movie_vue
    a:link{text-decoration: none!important;  }
    a:visited{text-decoration: none!important;  }
    a:hover{text-decoration: none!important;  }
    a:active{text-decoration: none!important;  }
    a:focus{text-decoration: none!important;  }
  .xian
    color #000
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
                color  #000000
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
              .styleshow
                font-size:c(24)
                color #707070
                margin c(20) 0
                i:nth-of-type(1)
                  color #ffa13d
              .zhuyan
                font-size c(24)
                color #717171
                margin-bottom c(21)
              .fenlei
                padding-bottom c(20)
                box-sizing border-box
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
              font-size c(22)
              color #ffffff
              border-radius c(28)
   .movie_msg
      display flex
      width 100%
      flex-direction column
      .list_bottom
        border-top 1px solid #eeeeee
        padding-top:c(28)
        height c(28)
        font-size c(22)
        i:nth-of-type(1)
          color #f9a147
        span
          color #6b6b6b
    .movie_section .vux-tab-wrap
      height c(77)
      padding-top 0
      .vux-tab-container
        height c(77)
        .vux-tab
          height c(77)
          .vux-tab-item
            font-size c(26)
          .vux-tab-ink-bar-transition-backward
            right 50%!important
          .vux-tab-ink-bar-transition-forward
            left 50%!important
    .two_box
      background #e5e5e5
      .ygp
        padding c(34) c(43)
        background #ffffff
        margin-bottom c(16)
        h1
          margin-bottom c(43)
          color #323232
          font-size c(28)
          font-weight 800
        .sp
          display flex
          a
            margin-right c(20)
        .sps
          a
            display flex
            flex-direction column
            span:nth-of-type(1)
              margin:c(21) 0
              color #202020
              font-size c(28)
            span:nth-of-type(2)
              color #565656
              font-size c(21)
</style>

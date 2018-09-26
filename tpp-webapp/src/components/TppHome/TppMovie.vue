<template>
  <div>
    <div class="movie_slide">
      <h1 class="Movie_p">
          <span class="hot">热映影片</span>
          <a href="javascript:;">
            <span>全部49部</span>
            <i class="iconfont icon-jiantou"></i>
          </a>
        </h1>
      <ul class="movie_ul">
          <router-link v-bind:to="'/detail/'+k.id" class="movie_li" v-for="k in list" :key="k.id">
            <a class="movie_one" href="javascript:;">
              <img :src=k.img />
              <span class="giant" v-if="k.type">{{k.type}} {{k.style}}</span>
              <span class="score" v-if="k.score">淘票票评分 <i>{{k.score}}</i></span>
              <span class="score" v-if="k.want"><i>{{k.want}}</i> 人想看</span>
            </a>
            <p class="movie_storm">{{k.title}}</p>
            <a class="trade" href="javascript:;">
              <span class="trade_one" v-if="k.showstyle">{{k.showstyle}}</span>
              <span class="trade_two" v-if="k.premise">{{k.premise}}</span>
            </a>
          </router-link>
          <li class="movie_more">
            <a class="region" href="javascript:;">
              <span class="whole">全部</span>
              <span>53部</span>
            </a>
          </li>
        </ul>
      </div>
    <div class="movie_slide">
      <h1 class="Movie_p">
        <span class="hot">即将上映</span>
        <a href="javascript:;">
          <span>全部</span>
          <i class="iconfont icon-jiantou"></i>
        </a>
      </h1>
      <ul class="movie_ul">
        <li class="movie_li" v-for="v in rightnow" :key="v.id">
          <a class="movie_one" href="javascript:;">
            <img :src=v.img />
            <span class="giant" v-if="v.type">{{v.type}} {{v.style}}</span>
            <span class="score" v-if="v.score">点映评分 <i>{{v.score}}</i></span>
            <span class="score" v-if="v.want"><i>{{v.want}}</i> 人想看</span>
          </a>
          <p class="movie_storm">{{v.title}}</p>
          <p class="movie_date">{{v.date}}</p>
        </li>
        <li class="movie_more">
          <a class="region" href="javascript:;">
            <span>查看全部</span>
          </a>
        </li>
      </ul>
    </div>
    <h1 class="movie_h1">
      <span class="recommend">精选推荐</span>
      <a class="moult" href="javascript:;">
        <i class="iconfont icon-shuaxin"></i>
        <span>换一换推荐内容</span>
      </a>
    </h1>
    <TppVideo :tppvideo="video[0]"></TppVideo>
    <TppNews :tppres="resources[0]"></TppNews>
    <TppChoice :tppnatural="natural[0]"></TppChoice>
    <TppChoice :tppnatural="natural[1]"></TppChoice>
    <TppNews :tppres="resources[1]"></TppNews>
    <TppVideo :tppvideo="video[1]"></TppVideo>
    <TppNews :tppres="resources[2]"></TppNews>
    <TppChoice :tppnatural="natural[2]"></TppChoice>
    <TppChoice :tppnatural="natural[3]"></TppChoice>
    <div class="model">
      <a class="model_one" href="javascript:;">
        <img src="../../assets/img/d-15.jpg" />
        <span class="model_onetit">
          <span class="hot_tit">热门预告片</span>
          <i class="bright">精彩电影视频锦集</i>
        </span>
      </a>
      <a class="model_one" href="javascript:;">
        <img src="../../assets/img/d-16.jpg" />
        <span class="model_onetit">
          <span class="hot_tit">一日·壹评</span>
          <i class="bright green">每日推荐精彩影评</i>
        </span>
      </a>
      <a class="model_one" href="javascript:;">
        <img src="../../assets/img/d-17.jpg" />
        <span class="model_onetit">
          <span class="hot_tit">热议话题</span>
          <i class="bright blue">一起来讨论电影</i>
        </span>
      </a>
      <a class="model_one" href="javascript:;">
        <img src="../../assets/img/d-18.jpg" />
        <span class="model_onetit">
          <span class="hot_tit">飘飘日签</span>
          <i class="bright purple">看经典电影台词</i>
        </span>
      </a>
    </div>
    <TppVideo :tppvideo="video[2]"></TppVideo>
    <TppNews :tppres="resources[3]"></TppNews>
    <TppNews :tppres="resources[4]"></TppNews>
    <TppVideo :tppvideo="video[3]"></TppVideo>
    <TppChoice :tppnatural="natural[1]"></TppChoice>
    <TppVideo :tppvideo="video[4]"></TppVideo>

  </div>
</template>

<script>
  import TppChoice from "./TppChoice";
  import TppNews from "./TppNews";
  import TppVideo from "./TppVideo";

  export default {
    name: "TppMovie",
    components: {TppVideo, TppNews, TppChoice},
    props:["list","rightnow","natural","resources","video"],
    methods:{
      gotodetaid(n){
        this.$emit("gotode",n)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  c(k){
    (k/75)rem
  }
  .Movie_p{
    display flex
    justify-content space-between
    align-items center
    line-height c(78)
  }
  .movie_slide{
    border-bottom  1px solid #efefef
  }
  .hot{
    font-size c(30)
    font-weight 600
    padding-left c(27)
  }
  .Movie_p a{
    font-size c(24)
    color #7d7d7d
    padding-right c(27)
  }
  .Movie_p .icon-jiantou{
    font-size c(24)
  }
  .movie_one{
    display flex
    position relative
    font-size c(16)
  }
  .movie_one img{
    width c(182)
    height c(265)
    border-radius c(5)
  }
  .giant{
    position absolute
    top c(9)
    left c(9)
    color #080705
    background-color #f9fef5
    padding c(4) c(7)
  }
  .score{
    color #ffa347
    position absolute
    bottom 0
    left 0
    font-size c(20)
    background  -webkit-linear-gradient(transparent, #1d1f22)
    padding c(30) 0 c(12) c(12)
    width c(170)
  }
  .movie_storm{
    font-size c(26)
    font-weight 600
    line-height c(62)
    width c(180)
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
    padding-left c(8)
  }
  .trade{
    color #fbf6f8
    font-size c(20)
    position relative
    display flex
    height c(52)
    margin-bottom c(32)
  }
  .trade span{
    padding c(14) c(22)
    border-radius c(35)
    position absolute
    top 0
    left 0
  }
  .trade_one{
    background -webkit-linear-gradient(left, #ff7ba1 , #ff3569);
  }
  .trade_two{
    background -webkit-linear-gradient(left, #55beff , #359ce9);
  }
  .movie_ul{
    display flex
    overflow-x scroll
    overflow-y hidden
    padding-left c(27)
  }
  .movie_li{
    margin-right c(18)
    color black
  }
  .movie_date{
    font-size c(24)
    color #696969
    padding-left c(10)
    padding-bottom c(35)
  }
  .recommend{
    font-size c(32)
    padding-left c(27)
    color #000
    line-height c(102)
  }
  .moult{
    font-size c(22)
    color #8a8a8a
    padding-right c(27)
  }
  .movie_h1{
    display flex
    justify-content space-between
    align-items center
    border-bottom 1px solid #f2f2f2
    position -webkit-sticky
    position sticky
    top c(84)
    background-color #ffffff
    z-index 10
  }
  .model{
    padding c(27)
    display flex
    flex-wrap wrap
    justify-content space-between
    border-bottom 1px solid #f2f2f2
  }
  .model_one{
    width 49%
    padding-bottom c(10)
    position relative
  }
  .model_one img{
    width c(345)
    height c(193)
  }
  .model_onetit{
    position absolute
    top c(30)
    left c(30)
    display flex
    flex-direction column
  }
  .hot_tit{
    font-size c(36)
    color #faf0ee
    line-height c(54)
  }
  .bright{
    font-size c(26)
    color #ffb6c3
    line-height c(44)
  }
  .green{
    color #c9ffed
  }
  .blue{
    color #90ddf6
  }
  .purple{
    color #e999ff
  }
  .region{
    display flex
    flex-direction column
    width c(180)
    height c(264)
    background-color #f5f5f5
    margin-right c(18)
    align-items center
    justify-content center
  }
  .region span{
    padding c(16) c(20)
    font-size c(24)
    color #868686
  }
  .whole{
    border-bottom 1px solid #c9c9c9
  }
</style>

<template>
  <div>
    <tab v-model="counter">
      <tab-item class="vux-center" v-for="(item, index) in list2" :key="index"  @click="addbig(index)">
        <img class="pic" :src=item :class="{ addstyle:index == counter}" /></tab-item>
    </tab>
    <swiper v-model="counter" :show-dots="false" class="movie_msg" height="1400px">
      <swiper-item>

        <div class="movietit">
          <h2>反贪风暴3 <span>8.6分</span></h2>
          <p>100分钟 | 剧情 | 古天乐 张智霖 郑嘉颖</p>
        </div>
        <div class="lookdate">
            <a href="javascript:;" v-for="(n,index) in navLists" :class="{ addclick:temp == index}" @click="wait(index)" :key="n.id">{{n.text}}</a>
            <div class="line"></div>
          </div>

        <div class="ticket theend" v-show="temp===0">
          <p>今天已放映完</p>
          <a href="javascript:;">看看其他日期</a>
        </div>
        <div class="ticket" v-show="temp===1">
          <a class="ticket_a" href="javascript:;">
            <span>
              <b>卡</b>
              <u>开通即可享购票超值会员价</u>
            </span>
            <span>
              <em>13元开卡</em>
              <i class="iconfont icon-jiantou"></i>
            </span>
          </a>
          <div class="detail">
            <p class="detail_p">
              <span>
                <u>22:20</u>
                <i>00:00 散场</i>
              </span>
              <span>
                <em>国语 2D</em>
                <i>2号临境音贵宾厅</i>
              </span>
            </p>
            <p class="detail_buy">
              <span>
                <i>37元</i>
                <u>影城卡34元</u>
              </span>
              <a href="javascript:;">购票</a>
            </p>
          </div>
          <div class="detail">
            <p class="detail_p">
              <span>
                <u>23:20</u>
                <i>01:00 散场</i>
              </span>
              <span>
                <em>国语 2D</em>
                <i>中国巨幕杜比全景声影厅</i>
              </span>
            </p>
            <p class="detail_buy">
              <span>
                <i>37元</i>
                <u>影城卡34元</u>
              </span>
              <a href="javascript:;">购票</a>
            </p>
          </div>
        </div>
        <div class="ticket" v-show="temp===2">
          <a class="ticket_a" href="javascript:;">
            <span>
              <b>卡</b>
              <u>开通即可享购票超值会员价</u>
            </span>
            <span>
              <em>13元开卡</em>
              <i class="iconfont icon-jiantou"></i>
            </span>
          </a>
          <div class="detail">
            <p class="detail_p">
              <span>
                <u>22:20</u>
                <i>00:00 散场</i>
              </span>
              <span>
                <em>国语 2D</em>
                <i>2号临境音贵宾厅</i>
              </span>
            </p>
            <p class="detail_buy">
              <span>
                <i>37元</i>
                <u>影城卡34元</u>
              </span>
              <a href="javascript:;">购票</a>
            </p>
          </div>
        </div>
        <TppSnack></TppSnack>
      </swiper-item>
      <swiper-item>
        <h2>碟中谍6：全面瓦解<span>9.0分</span></h2>
        <p>148分钟 | 动作 | 汤姆·克鲁斯 亨利·卡维尔 西蒙·佩吉</p>
      </swiper-item>
      <swiper-item>
        <h2>虎胆追凶 <span>15943</span>人想看</h2>
        <p>100分钟 | 剧情 | 古天乐 张智霖 郑嘉颖</p>
      </swiper-item>
      <swiper-item>
        <h2>碟中谍6 <span>8.6分</span></h2>
        <p>100分钟 | 剧情 | 古天乐 张智霖 郑嘉颖</p>
      </swiper-item>
      <swiper-item>
        <h2>碟中谍6 <span>8.6分</span></h2>
        <p>100分钟 | 剧情 | 古天乐 张智霖 郑嘉颖</p>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import { Tab, TabItem ,Swiper,Sticky, SwiperItem} from 'vux'
  import TppSnack from "./TppSnack";

  const list = () => ["../../static/img/d-19.jpg","../../static/img/d-20.jpg","../../static/img/d-21.jpg","../../static/img/d-22.jpg","../../static/img/d-23.jpg"]
  export default {
    name: "TppSpaceSlider",
    components: {
      TppSnack,
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      Sticky
    },
    data(){
      return{
        list2: list(),
        counter: 0,
        temp:0,
        navLists:[
          {
            "text":"今天09-20"
          },
          {
            "text":"明天09-21"
          },
          {
            "text":"后天09-22"
          }
        ]
      }
    },
    methods:{
      addbig(index){
        this.counter = index
      },
      wait:function(index){
        this.temp = index;
        let $lines = index*186+74;
        $('.line').animate({"left":$lines+"px"},200);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  c(k){
    (k/75)rem
  }
  a:link{text-decoration: none!important;  }
  a:visited{ text-decoration: none !important;}
  a:hover{text-decoration: none!important;  }
  a:active{text-decoration: none!important;  }
  a:focus{text-decoration: none!important;  }
  .movie_msg{
    text-align center
    margin-top c(224)
    h2{
      font-size c(28)
      color #000
      line-height c(40)
      padding c(12) 0 c(8)
      span{
        font-size c(28)
        color #fb9845
      }
    }
    p{
      font-size c(22)
      color #969696
    }
  }
  .movietit{
    padding-bottom c(16)
    background-color #fff
  }
  .vux-center{
    position relative
  }
  .pic{
    width c(114)
    height c(160)
    display inline-block
    position absolute
    bottom 0
    left c(24)
    transition all 0.4s
  }
  .vux-tab-wrap .vux-tab-container{
    height c(224)
  }
  .vux-tab-container .vux-tab{
    height c(224)
    background-color #3c5e8c
  }
  .vux-slider{
    margin-top c(180)
  }
  .addstyle{
    width c(134)
    height c(194)
    border c(2) solid #fff
    left c(14)
  }
  .scrollable .vux-tab-ink-bar{
    opacity 0
  }
  .vux-tab-item vux-center{
    text-align center
  }
  .lookdate{
    display flex
    border-top c(2) solid #f2f2f2
    border-bottom c(2) solid #f2f2f2
    position relative
    background-color #fff
    a{
      font-size c(24)
      color #656565
      padding 0 c(35)
      line-height c(80)
    }
    .line{
      width c(38)
      height c(4)
      background-color #ff3e4f
      position absolute
      bottom 0
      left c(74)
    }
    .addclick{
      color #ff3e4f
    }
  }
  .ticket{
    border-bottom c(18) solid #f5f5f5
  }
  .ticket_a{
    display flex
    justify-content space-between
    line-height c(70)
    color #74c881
    border-top 1px solid #f2f2f2
    background-color #f7f9f6
    padding 0 c(26)
    span{
      b{
        color #fff
        background-color #6bc974
        padding 0 c(5)
      }
      i{
        font-size c(24)
        color #a4a7a3
      }
    }
  }
  .detail{
    padding c(14) c(26)
    display flex
    justify-content space-between
    border-bottom 1px solid #f0f0f0
  }
  .detail_p{
    display flex
    align-items flex-end
    span {
      display flex
      flex-direction column
      padding-right c(24)
      text-align left
      u {
        font-size c(32)
        color #000
        font-weight 600
        line-height c(52)
      }
      em {
        font-size c(22)
        font-weight 300
        color #000
        line-height c(42)
      }
    }
  }
  .detail_buy{
    display flex
    align-items center
    span{
      display flex
      flex-direction column
      align-items flex-end
      padding-right c(34)
      i{
        font-size c(32)
        color #ff3d6c
        font-weight 600
      }
      u{
        font-size c(24)
        color #74c881
      }
    }
    a{
      font-size c(24)
      color #f33268
      border 1px solid #f33268
      border-radius c(30)
      background-color #fff
      padding c(10) c(18) c(12)
    }
  }
  .theend{
    padding c(56) 0
    text-align center
    p{
      font-size c(30)
      color #8e8e8e
      margin-bottom c(38)
    }
    a{
      font-size c(22)
      color #919191
      padding c(6) c(22)
      border-radius c(24)
      border 1px solid #919191
    }
  }
</style>

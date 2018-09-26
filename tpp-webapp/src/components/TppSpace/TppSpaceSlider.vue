<template>
  <div>
    <tab v-model="counter">
      <tab-item class="vux-center" v-for="(item, index) in spacedate" :key="index"  @click="addbig(index)">
        <img class="pic" :src=item.img :class="{ addstyle:index == counter}" /></tab-item>
    </tab>
    <swiper v-model="counter" :show-dots="false" class="movie_msg" height="1360px">
      <swiper-item v-for="(k, index) in spacedate" :key="k.id">
        <div class="movietit">
          <h2>{{k.title}} <span>{{ k.score }}分</span></h2>
          <p>{{ k.time }} | {{k.type}} | {{k.name}}</p>
        </div>
        <div class="lookdate">
            <a href="javascript:;" v-for="(n,index) in navLists" :class="{ addclick:temp == index}" @click="wait(index)" :key="n.id">{{n.text}}</a>
            <div class="line"></div>
          </div>

        <div class="ticket" v-show="temp===0">
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
          <div class="detail" v-for="n in k.movietime[0].today" :key="n.id">
            <p class="detail_p">
              <span>
                <u>{{ n.start }}</u>
                <i>{{ n.end }} 散场</i>
              </span>
              <span>
                <em>{{ n.language }} {{ n.type }}</em>
                <i>{{ n.affect }}</i>
              </span>
            </p>
            <p class="detail_buy">
              <span>
                <i>{{ n.price }}元</i>
                <u>影城卡34元</u>
              </span>
              <router-link to="/chooseseat">购票</router-link>
            </p>
          </div >
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
          <div class="detail" v-for="s in k.movietime[0].tommorrow" :key="s.id">
            <p class="detail_p">
              <span>
                <u>{{ s.start }}</u>
                <i>{{ s.end }} 散场</i>
              </span>
              <span>
                <em>{{ s.language }} {{ s.type }}</em>
                <i>{{ s.affect }}</i>
              </span>
            </p>
            <p class="detail_buy">
              <span>
                <i>{{ s.price }}元</i>
                <u>影城卡34元</u>
              </span>
              <a href="javascript:;">购票</a>
            </p>
          </div >
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
          <div class="detail" v-for="v in k.movietime[0].aftertom" :key="v.id">
            <p class="detail_p">
              <span>
                <u>{{ v.start }}</u>
                <i>{{ v.end }} 散场</i>
              </span>
              <span>
                <em>{{ v.language }} {{ v.type }}</em>
                <i>{{ v.affect }}</i>
              </span>
            </p>
            <p class="detail_buy">
              <span>
                <i>{{ v.price }}元</i>
                <u>影城卡34元</u>
              </span>
              <a href="javascript:;">购票</a>
            </p>
          </div>
        </div>
        <TppSnack></TppSnack>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import { Tab, TabItem ,Swiper,Sticky, SwiperItem} from 'vux'
  import TppSnack from "./TppSnack";

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
        ],
        spacedate:[]
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
      },
      getDate(){
        this.$http.get("http://localhost:3000/space").then((response)=>{
          this.spacedate = response.data
          // console.log(response.data)
        })
      }
    },
    created(){
      this.getDate()
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
    position relative
  }
  .vux-tab-container .vux-tab{
    height c(224)
    background-color #3c5e8c
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
  .vux-tab-container .vux-tab .vux-tab-item{
    margin 0
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
</style>

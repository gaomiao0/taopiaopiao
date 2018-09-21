<template>
        <div class="tqvideoOne" v-show="ischeck==0">
            <div class="tqvideoOneBox" v-for="(con,cid) in rec.content">
                <video controls :poster="con.videoimg">
                    <source :src="con.video"/>
                </video>
                <p class="tqvIntroduce">{{con.title}}</p>
                <div class="tqvMessage box">
                    <div class="tqvSource box">
                        <img :src="con.touxiang" alt="">
                        <span>{{con.name}}</span>
                        <img :src="con.guan" alt="" @click="Attention(cid)" v-if="isguan">
                        <img :src="con.yiguan" alt="" @click="Attention(cid)" v-else>
                    </div>
                    <div class="tqvContent box">
                        <div class="tqvPraise box box1 box2">
                            <img :src="con.zanF" @click="praise(cid)" v-if="iszan">
                            <img :src="con.zanT"  @click="praise(cid)" v-else>
                            <span>{{con.zanNum}}</span>
                        </div>
                        <div class="tqvTxt box box1 box2">
                            <img :src="con.mes">
                            <span>{{con.mesn}}</span>
                        </div>
                        <img :src="con.san" class="box1" @click="isShow(cid)">
                    </div>
                </div>
                    <img class="taopiao" :src="con.logo" v-if="con.logo">
                <transition name="fade">
                    <div class="mask" v-show="show===cid"></div>
                </transition>
                <transition name="fade">
                    <div class="shareBox" v-show="show===cid">
                        <div class="shareList bg">
                            <div class="share" v-for="(sha,sid) in con.share">
                                <img :src="sha.imgage" alt="">
                                <p>{{sha.txt}}</p>
                            </div>
                            <!-- <div class="share">
                                <img src="../../assets/img/tqv-62.png" alt="">
                                <p>支付宝</p>
                            </div>
                            <div class="share">
                                <img src="../../assets/img/tqv-63.png" alt="">
                                <p>微信好友</p>
                            </div>
                            <div class="share">
                                <img src="../../assets/img/tqv-64.png" alt="">
                                <p>微信好友</p>
                            </div>
                            <div class="share">
                                <img src="../../assets/img/tqv-65.png" alt="">
                                <p>微信好友</p>
                            </div>
                            <div class="share">
                                <img src="../../assets/img/tqv-66.png" alt="">
                                <p>微信好友</p>
                            </div>
                            <div class="share">
                                <img src="../../assets/img/tqv-67.png" alt="">
                                <p>微信好友</p>
                            </div> -->
                        </div>
                        <div class="bg">
                            <div class="Interest">
                                <div class="share" v-for="(shar,shid) in con.Int">
                                    <img :src="shar.imgage" alt="">
                                    <p>{{shar.txt}}</p>
                                </div>
                                <!-- <div class="share">
                                    <img src="../../assets/img/tqv-69.png" alt="">
                                    <p>微信好友</p>
                                </div> -->
                            </div>
                        </div>
                        <div class="cancel">
                            <p @click="cance">{{con.can}}</p>
                        </div>
                    </div>
                </transition>
            </div>



            
            <!-- <div class="tqvideoOneBox">
                <video controls  poster="../../assets/img/tqv-bg1.png">
                    <source src="//cloud.video.taobao.com/play/u/1745440806/p/2/e/6/t/1/50262610295.mp4"/>>
                </video>
                <p class="tqvIntroduce">一部国产良心鬼怪电影，把中国捉妖术演活了，堪称神来之笔</p>
                <div class="tqvMessage box">
                    <div class="tqvSource box">
                        <img src="../../assets/img/tqv-21.png" alt="">
                        <span>大荒电影</span>
                        <img src="../../assets/img/tqv-6.png" alt="">
                    </div>
                    <div class="tqvContent box">
                        <div class="tqvPraise box box1 box2">
                            <img src="../../assets/img/tqv-3.png" alt="">
                            <span>81</span>
                        </div>
                        <div class="tqvTxt box box1 box2">
                            <img src="../../assets/img/tqv-4.png" alt="">
                            <span>14</span>
                        </div>
                        <img src="../../assets/img/tqv-5.png" alt="" class="box1">
                    </div>
                </div>
            </div>
            <div class="tqvideoOneBox">
                <video controls poster="../../assets/img/tqv-bg1.png">
                    <source src="//cloud.video.taobao.com/play/u/1745440806/p/2/e/6/t/1/50262610295.mp4"/>>
                </video>
                <p class="tqvIntroduce">一部国产良心鬼怪电影，把中国捉妖术演活了，堪称神来之笔</p>
                <div class="tqvMessage box">
                    <div class="tqvSource box">
                        <img src="../../assets/img/tqv-21.png" alt="">
                        <span>大荒电影</span>
                        <img src="../../assets/img/tqv-6.png" alt="">
                    </div>
                    <div class="tqvContent box">
                        <div class="tqvPraise box box1 box2">
                            <img src="../../assets/img/tqv-3.png" alt="">
                            <span>81</span>
                        </div>
                        <div class="tqvTxt box box1 box2">
                            <img src="../../assets/img/tqv-4.png" alt="">
                            <span>14</span>
                        </div>
                        <img src="../../assets/img/tqv-5.png" alt="" class="box1">
                    </div>
                </div>
            </div> -->
        </div>
</template>

<script>
import bus from "../../assets/eventBus"
export default {
    data() {
      return {
        ischeck: '0',
        isguan:true,
        imgs:'false',
        zan:"",
        iszan:true,
        show:false,
      }
    },
    props:{
        rec:''
    },
    created(){
        
    },
    methods: {
        Attention:function(){
           this.isguan==false?this.isguan=true:this.isguan=false;
        },
        praise(cid){
            this.iszan==false?this.iszan=true:this.iszan=false;
        },
        isShow(cid){
            this.show =cid
        },
        cance(){
            this.show = false
        },
     
    },
     mounted:function(){
        var that = this
        bus.$on("tabEvent",(data)=>{
            that.ischeck = data
        })
    }
}
</script>


<style  lang="stylus" rel="stylesheet/stylus">
    c(p) 
        (p/108)rem 
    .mask{
        width 100%;
        height 100%;
        left 0;
        top:0;
        position fixed;
        background #000;
        opacity .4;
        z-index 3
    }
   .shareBox{
       position fixed;
       left 0;
       bottom 0;
       width 100%;
       z-index 4;
       background #f5f5f5;
       overflow-x auto;
       border-top-left-radius :c(50);
       border-top-right-radius :c(50);
   }
   .shareList{
       display flex;
       overflow-x auto;
       padding c(74) 0 c(36) c(75);
   }
   .share{
       flex-shrink 0;
       margin-right :c(94);
   }
   .share img{
       width c(152);
       height c(152);
   }
   .bg{
       background #fff;
   }
   .share p{
       font-size c(32);
       color #999999;
       text-align :center;
       line-height c(104);
   }
   .Interest{
       display flex;
       margin 0 c(44); 
       border-top 1px solid red;
       padding c(58) 0 c(36) c(30);
    
   }
   .cancel{
       margin-top c(30);
       font-size c(50);
       background #fff;
       text-align center;
       line-height c(166);
       font-weight 600;
   }

</style>

<template>
        <div class="tqvideoOne" v-show="ischeck==0">
            <div class="tqvideoOneBox" v-for="(con,cid) in rec.content">
                <video controls :poster="con.videoimg">
                    <source :src="con.video"/>
                </video>
                <p class="tqvIntroduce" @click="goDetai(cid)">{{con.title}}</p>
                <router-link to="/TqvDetail" class="tqvMessage box">
                    <div class="tqvSource box">
                        <img :src="con.touxiang" alt="">
                        <span>{{con.name}}</span>
                        <li @click="Attention(cid)">
                            <img v-lazy="con.guan" v-show="isguan[cid]==false" class="gua">
                            <img v-lazy="con.yiguan" v-show="isguan[cid]==true" class="gua">
                        </li>
                      
                    </div>
                    <div class="tqvContent box">
                        <div class="tqvPraise box box1 box2">
                            <img v-lazy="con.zanF" @click="praise(cid)" v-show="iszan==false">
                            <img v-lazy="con.zanT" @click="praises(cid)" v-show="iszan==true">
                            <span>{{con.zanNum}}</span>
                        </div>
                        <div class="tqvTxt box box1 box2">
                            <img v-lazy="con.mes">
                            <span>{{con.mesn}}</span>
                        </div>
                        <img v-lazy="con.san" class="box1" @click="isShow(cid)">
                    </div>
                </router-link>
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
  
                        </div>
                        <div class="bg">
                            <div class="Interest">
                                <div class="share" v-for="(shar,shid) in con.Int">
                                    <img :src="shar.imgage" alt="">
                                    <p>{{shar.txt}}</p>
                                </div>
                     
                            </div>
                        </div>
                        <div class="cancel">
                            <p @click="cance">{{con.can}}</p>
                        </div>
                    </div>
                </transition>
            </div>

  
        </div>
</template>

<script>
import bus from "../../assets/eventBus"
export default {
    data() {
      return {
        ischeck: '0',
        isguan:[false,false,false],
        imgs:'false',
        zan:[],
        iszan:[],
        show:false,
      }
    },
    props:{
        rec:''
    },
    created(){
        
    },
    methods: {
        Attention(cid){
           this.isguan[cid]=!this.isguan[cid]
           console.log(cid,this.isguan[cid])
        },
        praise(cid){
            this.iszan[cid]=!this.iszan[cid]
            console.log(cid,this.iszan[cid])
 
            
        },
        isShow(cid){
            this.show =cid
        },
        cance(){
            this.show = false
        },
        praises(cid){
            this.iszan[cid]=!this.iszan[cid]
        },
        goDetai(cid){
            this.$router.push({path:'/TQVDetail',query:{id:cid}})
        }
     
    },
     mounted:function(){
        var that = this
        bus.$on("tabEvent",(data)=>{
            that.ischeck = data
        })
        this.Attention()
       
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
       margin-top c(15);
       font-size c(50);
       background #fff;
       text-align center;
       line-height c(166);
       font-weight 600;
   }

</style>

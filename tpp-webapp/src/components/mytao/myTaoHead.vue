<template>
    <div class="header">
        <transition name="fade">
             <div class="roof" :class="{roofF:my==true}">
                <img src="../../../static/img/tqv-111.png" v-show="my==false" >
                <img src="../../../static/img/tqv-131.png" v-show="my==true">
                <p v-show="my">我的</p>
                <img src="../../../static/img/tqv-112.png" v-show="my==false">
                <img src="../../../static/img/tqv-131.png" v-show="my==true">
            </div>
        </transition>
        <div class="roof" v-show="my">
            <img src="../../../static/img/tqv-111.png" alt="">
            <p v-show="my">我的</p>
            <img src="../../../static/img/tqv-112.png" alt="">
        </div>
        <div class="user">
            <div class="userbox">
                <div class="ChatHead">
                    <img src="../../../static/img/tqv-113.png" alt="">
                </div>
                <div class="userMes">
                    <p class="username">33313</p>
                    <div class="Focus">
                        <p><span>关注</span><span>0</span></p>
                         | &nbsp
                        <p><span>粉丝</span><span>0</span></p>
                    </div>
                </div>
            </div>
            <img src="../../../static/img/tqv-115.png" alt="" class="usermore">
        </div>
    </div>
    
</template>

<script>
    export default {
        data(){
            return{
                my:false,
            }
        },
       props:{
           scroll:null
       },
       methods:{
           scrollTop(){
               if(this.scroll>=5){
                   this.my = true;
               }else{
                   this.my = false;
               }
           }
       },
       watch:{
           scroll(){
             this.scrollTop()
           }
       }
       
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    c(p) 
        (p/108)rem 
    .header{
        width 100%;
        height c(478);
        background:url("../../../static/img/tqv-110.png")
        background-size c(1080) c(478);
        color #ffffff;
    }

    .roof{
        width 100%;
        display flex;
        justify-content space-between;
        font-size c(36);
        padding c(40) c(46) 0;
        box-sizing border-box;
        margin-bottom c(82); 
        align-items center;
    }
    .roofF{
        position  fixed;
        width 100%;
        display flex;
        justify-content space-between;
         font-size c(36);
        padding c(40) c(46) c(46);
        box-sizing border-box;
        color #000;
        background #fff;
        align-items center;
    }
    .roof img{
        width c(58);
        height c(60);
    }

    .user{
        display flex;
        align-items center;
        justify-content space-between;
    }
    .userbox{
        display flex;
        margin-left c(60)
    }
    .username{
        font-size c(58);
        line-height c(138)
    }
    .ChatHead img{
        width c(211);
        height c(211);
        border-radius 50%;
        margin-right c(44);
    }
    .Focus{
        display flex;
    }
    .Focus p{
        font-size c(38);
    }
    .Focus span{
        margin-right c(16)
    }
    .usermore{
        font-size c(60);
        margin-right c(40);
    }
</style>

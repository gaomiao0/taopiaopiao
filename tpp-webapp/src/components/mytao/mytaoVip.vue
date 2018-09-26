<template>
<div class=""> 
    <div class="vip">
        <p class="vipP">会员中心</p>
        <div class="vipMes">
            <span>再积337经验值可升级为会员</span>
            <img src="../../../static/img/tqv-116.png" alt="">
        </div>
    </div>
    <div class="taoList">
        <div class="taoBox">
            <img src="../../../static/img/tqv-121.png" alt="">
            <p>电影票</p>
        </div>
        <div class="taoBox">
            <img src="../../../static/img/tqv-122.png" alt="">
            <p>优惠券</p>
        </div>
        <div class="taoBox">
            <img src="../../../static/img/tqv-123.png" alt="">
            <p>权益卡</p>
        </div>
        <div class="taoBox">
            <img src="../../../static/img/tqv-124.png" alt="">
            <p>演出票</p>
        </div>
    </div>
    <div class="advertising">
        <img src="../../../static/img/tqv-125.png" alt="">
    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped  lang="stylus" rel="stylesheet/stylus">
    c(p) 
        (p/108)rem 
    .vip{
        display flex;
        width 100%;
        justify-content space-between;
        align-items center;
        background #ffffff;
    }
    .vipP{
        font-size c(46);
        font-weight bolder;
        line-height c(180);
        margin-left c(60);
    }
    .vipMes{
        display flex;
        font-size c(36);
        color #777777;
        margin-right c(50);
    }
    .vipMes span{ 
        display block 
        margin-right c(60)
    }

    .taoList{
        display flex;
        margin c(30) 0 c(30);
        background #ffffff;
        width 100%;
        padding c(80) 0 c(42)
    }
    .taoBox{
        width 25%;
        text-align center;
    }
    .taoBox img{
        width c(94);
        height c(80);
        margin 0 auto;
    }
    .advertising img{
        width 100%;
    }
</style>


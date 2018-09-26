<template>
    <div class="listBox">
        <div class="list">
            <p class="listp">想看的电影</p>
            <div class="listMes">
                <span>2</span>
                <img src="../../../static/img/tqv-116.png" alt="">
            </div>
        </div>
         <div class="list">
            <p class="listp">看过的电影</p>
            <div class="listMes">
                <span>2</span>
                <img src="../../../static/img/tqv-116.png" alt="">
            </div>
        </div>
         <div class="list">
            <p class="listp">播放记录</p>
            <div class="listMes">
                <span>2</span>
                <img src="../../../static/img/tqv-116.png" alt="">
            </div>
        </div>
         <div class="list">
            <p class="listp">我的小聚场</p>
            <div class="listMes">
                <span>2</span>
                <img src="../../../static/img/tqv-116.png" alt="">
            </div>
        </div>
         <div class="list">
            <p class="listp">发起的讨论 </p>
            <div class="listMes">
                <span>2</span>
                <img src="../../../static/img/tqv-116.png" alt="">
            </div>
        </div>
         <div class="list">
            <p class="listp"> 银行卡特惠</p>
            <div class="listMes">
                <span>2</span>
                <img src="../../../static/img/tqv-116.png" alt="">
            </div>
        </div>
         <div class="list">
            <p class="listp"> 阿里鱼商城</p>
            <div class="listMes">
                <span>2</span>
                <img src="../../../static/img/tqv-116.png" alt="">
            </div>
        </div>
         <div class="list">
            <p class="listp">娱乐宝</p>
            <div class="listMes">
                <span>2</span>
                <img src="../../../static/img/tqv-116.png" alt="">
            </div>
        </div>
         <div class="list">
            <p class="listp">帮助与反馈</p>
            <div class="listMes">
                <span>咨询票小蜜</span>
                <img src="../../../static/img/tqv-116.png" alt="">
            </div>
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
    .listBox{
        margin-top c(30);
        background #ffffff;
    } 
    .list{
        display flex;
        justify-content space-between;
        align-items center;
        height c(190);
        margin  0 c(46);
        border-bottom 1px solid #f1f1f1; 
    }
    .list:last-child{
        margin-bottom c(150);
    }
    .listp{
        font-size c(40);
    }
    .listMes{
        display flex;
        align-items center;
        color #777777;
        font-size c(36);
    }
    .listMes span{
        margin-right c(20);
    }
    .listMes img{
        width c(16);
        height c(28);
    }
</style>

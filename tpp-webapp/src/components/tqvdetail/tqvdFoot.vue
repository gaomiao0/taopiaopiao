<template>
    <div class="tqvFoot">
        <input type="text" placeholder="说点什么吧" class="say">
        <input type="button" value="发送" class="btn">
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    c(p) 
        (p/108)rem
    .tqvFoot{
        width 100%;
        position fixed;
        left 0;
        bottom 0;
        background #f6f6f6;
        height c(134);
    }
    .tqvFoot input{
        margin c(26) 0 0 c(36);
    }
    .say{
        width c(860);
        height c(84);
        background #ffffff;
        border-radius c(15);
        padding-left c(30);
    }
    .btn{
        background #f6f6f6;
    }
</style>


<template>
    <div class="centers">
        <mytao-vip></mytao-vip>
        <mytao-list></mytao-list>
    </div>
</template>

<script>
import mytaoVip from "./mytaoVip.vue"
import mytaoList from "./mytaoList.vue"
    export default {
        name: "tqvideo",
        components:{
            mytaoVip,
            mytaoList
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    c(p) 
        (p/108)rem 
    .centers{
        background: #f5f5f5;
        overflow-y auto;
    }
</style>

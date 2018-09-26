<template>
<div>
    <tqvd-header></tqvd-header>
    <tqvde-conatent></tqvde-conatent>
    <tqvd-foot></tqvd-foot>
</div>
</template>
<script>
import tqvdHeader from "../components/tqvdetail/tqvdHeader.vue"
import tqvdeConatent from "../components/tqvdetail/tqvdeConatent.vue"
import tqvdFoot from "../components/tqvdetail/tqvdFoot.vue"

export default {
    components:{
        tqvdHeader,
        tqvdeConatent,
        tqvdFoot
    }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    c(p) 
        (p/108)rem >>

</style>


<template>
    <div>
       <my-tao-head :scroll = scr></my-tao-head>
       <mytao-content></mytao-content>
    </div>
</template>

<script>
import myTaoHead from "../components/mytao/myTaoHead.vue"
import mytaoContent from "../components/mytao/mytaoContent.vue"
    export default {
        name: "tqvideo",
        data(){
            return{
                scr:null
            }
        },
        components:{
            myTaoHead,
            mytaoContent
        },
        mounted(){
            window.addEventListener("scroll",this.handScroll)
        },
        methods:{
            handScroll(){
                var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                this.scr = scroll
                // console.log(this.scr)
            }
        }
    }
</script>

<style scoped>

</style>

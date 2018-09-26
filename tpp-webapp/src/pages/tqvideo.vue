<template>
    <div v-if="!loding">
        <tqvideo-header :nav = data></tqvideo-header>
        <tqvideo-content :con = data></tqvideo-content>
    </div>
      

</template>

<script>
import tqvideoHeader from "../components/tqvideo/tqvideoHeader.vue"
import tqvideoContent from "../components/tqvideo/tqvideoContent.vue"

    export default {
        name: "tqvideo",
        components:{
            tqvideoHeader,
            tqvideoContent
        },
        data(){
            return{
                data:'',
                loding:false
            }
        },
    mounted(){
        this.loding = true
        let that = this
         this.$http.get('http://localhost:3000/tqvideo')
            .then((data) => {
                this.data = data.data
                that.loding = false
        }, () => {
            console.log('这里是用了vue-source,后端没有接口')
        })
         
    }
   
    }
</script>

 <style scoped>
 
video{
    width: 100%;
}

</style>

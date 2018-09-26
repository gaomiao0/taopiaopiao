<template>
    <div v-if="!loding">
        <tqvideo-header :nav = data></tqvideo-header>
        <tqvideo-content :con = data></tqvideo-content>
    </div>
      

</template>

<script>
import tqvideoHeader from "../components/tqvideo/tqvideoHeader.vue"
import tqvideoContent from "../components/tqvideo/tqvideoContent.vue"
import { Indicator } from 'mint-ui';
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
    created(){
        Indicator.open({
          text: 'Loading...',
          spinnerType: 'fading-circle'
        });
        this.loding = true
        let that = this
         this.$http.get('http://localhost:3000/tqvideo')
            .then((data) => {
                this.data = data.data
                that.loding = false
                Indicator.close();
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

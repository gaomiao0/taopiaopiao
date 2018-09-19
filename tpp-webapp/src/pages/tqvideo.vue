<template>
    <div>
      <tqvideo-header></tqvideo-header>
       <tqvideo-content></tqvideo-content>
    </div>
</template>

<script>
import tqvideoHeader from "../components/tqvideo/tqvideoHeader.vue"
import tqvideoContent from "../components/tqvideo/tqvideoContent.vue"
import '../../static/css/common.css'
    export default {
        name: "tqvideo",
        components:{
            tqvideoHeader,
            tqvideoContent
        }
    }
</script>

 <style scoped>
 
video{
    width: 100%;
}
</style>

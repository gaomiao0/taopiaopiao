<template>
    <div class="tqvideoFour" v-show="ischeck==3">
        <div class="tqvideoOneBox">
            <video controls>
                <source src="//cloud.video.taobao.com/play/u/1745440806/p/1/e/6/t/1/d/hd/50266700597.mp4"/>>
            </video>
            <p class="tqvIntroduce">一部国产良心鬼怪电影，把中国捉妖术演活了，堪称神来之笔</p>
            <div class="tqvMessage box">
                <div class="tqvSource box">
                    <img src="../../assets/img/tqv-21.png" alt="">
                    <span>大荒电影</span>
                    <img src="../../assets/img/tqv-6.png" alt="">
                </div>
                <div class="tqvContent box">
                    <div class="tqvPraise box box1 box2">
                        <img src="../../assets/img/tqv-3.png" alt="">
                        <span>81</span>
                    </div>
                    <div class="tqvTxt box box1 box2">
                        <img src="../../assets/img/tqv-4.png" alt="">
                        <span>14</span>
                    </div>
                    <img src="../../assets/img/tqv-5.png" alt="" class="box1">
                </div>
            </div>

        </div>
        <div class="tqvideoOneBox">
            <video controls>
                <source src="//cloud.video.taobao.com/play/u/1745440806/p/1/e/6/t/1/d/hd/50270966451.mp4"/>>
            </video>
            <p class="tqvIntroduce">一部国产良心鬼怪电影，把中国捉妖术演活了，堪称神来之笔</p>
            <div class="tqvMessage box">
                <div class="tqvSource box">
                    <img src="../../assets/img/tqv-21.png" alt="">
                    <span>大荒电影</span>
                    <img src="../../assets/img/tqv-6.png" alt="">
                </div>
                <div class="tqvContent box">
                    <div class="tqvPraise box box1 box2">
                        <img src="../../assets/img/tqv-3.png" alt="">
                        <span>81</span>
                    </div>
                    <div class="tqvTxt box box1 box2">
                        <img src="../../assets/img/tqv-4.png" alt="">
                        <span>14</span>
                    </div>
                    <img src="../../assets/img/tqv-5.png" alt="" class="box1">
                </div>
            </div>

        </div>
    </div>
</template>


<script>
import bus from "../../assets/eventBus"
export default {
    data() {
      return {
        ischeck: ''
      }
    },
     mounted:function(){
        var that = this
        bus.$on("tabEvent",(data)=>{
            that.ischeck = data
        })
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  c(p) 
    (p/108)rem 

</style>


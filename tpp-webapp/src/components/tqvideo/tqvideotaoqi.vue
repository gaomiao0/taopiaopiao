<template>
    <div class="tqvideoTwo" v-show="ischeck==1">
        <div class="tqvideoTwoBox">
            <div class="tqvideoTwoCountry">
                <div class="tqvideoTwoAll box3">
                    <span class="country">全部</span>
                    <span>中国</span>
                    <span>美国</span>
                    <span>加拿大</span>
                    <span>英国</span>
                </div>
                <div class="tqvideoTwoClassify box3">
                    <span class="classify">全部</span>
                    <span>剧情</span>
                    <span>爱情</span>
                    <span>动作</span>
                    <span>喜剧</span>
                    <span>惊悚</span>
                    <span>悬疑</span>
                    <span>犯罪</span>
                    <span>奇幻</span>
                    <span>冒险</span>
                    <span>科幻</span>
                    <span>动画</span>
                </div>
                <div class="tqvideoTwoTimer box3">
                    <span class="timer">最热</span>
                    <span>最新</span>
                </div>
            </div>
        </div>
        <div class="tqvideoList">
            <div class="tqvideoListDetail">
                <img src="../../assets/img/tqv-11.png" alt="">
                <p>背水一战</p>
            </div>
            <div class="tqvideoListDetail">
                <img src="../../assets/img/tqv-13.png" alt="">
                <p>赤警威龙</p>
            </div>
            <div class="tqvideoListDetail">
                <img src="../../assets/img/tqv-12.png" alt="">
                <p>别惹我</p>
            </div>
            <div class="tqvideoListDetail">
                <img src="../../assets/img/tqv-11.png" alt="">
                <p>背水一战</p>
            </div>
            <div class="tqvideoListDetail">
                <img src="../../assets/img/tqv-13.png" alt="">
                <p>赤警威龙</p>
            </div>
            <div class="tqvideoListDetail">
                <img src="../../assets/img/tqv-12.png" alt="">
                <p>别惹我</p>
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


<template>
 <div class="center">
    <tqvideo-recommended :rec = con[0]></tqvideo-recommended>
      
    <tqvdieo-tao-qi :taoqi = con[1]></tqvdieo-tao-qi>

    <tqvideo-fast-see></tqvideo-fast-see>

    <tqvideo-new-video></tqvideo-new-video>

    <tqvideo-variety></tqvideo-variety>
    
    <tqvideo-funny></tqvideo-funny>

    <tqvideo-tv-play></tqvideo-tv-play>

  </div>
            
</template>

<script>
import tqvideoRecommended from "./tqvideoRecommended.vue";
import tqvdieoTaoQi from "./tqvideotaoqi.vue";
import tqvideoFastSee from "./tqvideoFastSee.vue";
import tqvideoNewVideo from "./tqvideoNewVideo.vue";
import tqvideoVariety from "./tqvideoVariety.vue";
import tqvideoFunny from "./tqvideoFunny.vue";
import tqvideoTvPlay from "./tqvideoTvPlay.vue";
export default {
  components: {
    tqvideoRecommended,
    tqvdieoTaoQi,
    tqvideoFastSee,
    tqvideoNewVideo,
    tqvideoVariety,
    tqvideoFunny,
    tqvideoTvPlay
  },
  data() {
    return {

    };
  },
  props:{
    con:''
  },
 
  mounted(){
  
    
  }
 
}
</script>


<style lang="stylus" rel="stylesheet/stylus">
c(p) {
  (p / 108) rem;
}

li{
  list-style: none;
}
.center {
  height: c(1616);
  overflow-y: auto;
  display flex;
}
.tqvideoOne{
  width 100%;
  flex-shrink 0;
}
.tqvideoTwo{
  width 100%;
  flex-shrink 0;
}

.tqvideoOneBox {
  position: relative;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

video {
  width: 100%;
  border: none;
}

.box {
  display: flex;
  align-items: center;
}

.tqvMessage {
  justify-content: space-between;
  box-sizing: border-box;
  margin: c(22) c(48) c(54);
  color: #a0a0a0;
}

.tqvIntroduce {
  font-size: c(44);
  letter-spacing: c(6);
  margin: c(48) c(48) 0;
}

.tqvSource {
  width: c(350);
  height: c(100);
  background: #f5f5f5;
  justify-content: space-around;
  border-radius: c(50);
  font-size: c(36);
}

.tqvSource img:nth-child(1){
  width: c(60);
  height: c(60);
  border-radius: 50%;
}

.tqvSource li .gua{
  width: c(35);
  height: c(35);
}

.tqvContent {
  font-size: c(36);
}

.tqvContent img {
  width: c(50);
  height: c(50);
}

.box1 {
  margin-left: c(54);
}

.box2 img {
  margin-right: c(16);
}

.tqvideoTwoBox {
  width: 100%;
  height: c(454);
  padding: c(30) 0 c(60);
  box-sizing: border-box;
}

.tqvideoTwoCountry {
  padding-left: c(25);
  box-sizing: border-box;
}

.box3 {
  display: flex;
  overflow-x: auto;
  margin-top: c(30);
}

.box3 span {
  flex-shrink: 0;
  display: block;
  width: c(166);
  height: c(91);
  text-align: center;
  font-size: c(40);
  margin-right: c(40);
  line-height: c(91);
  border-radius: c(50);
}

.country {
  background: #f5f5f5;
  color: red;
}

.classify {
  background: #f5f5f5;
  color: red;
}

.timer {
  background: #f5f5f5;
  color: red;
}

.tqvideoList {
  display: flex;
  flex-wrap: wrap;
  margin-left: c(13);
}

.tqvideoListDetail {
  margin: 0 c(13) c(25) 0;
  font-size: c(38);
}

.tqvideoListDetail img {
  width: c(334);
  height: c(521);
}

.tqvideoListDetail p {
  line-height: c(122) padding-left c(14);
}

.tqvideoListDetail:nth-child(2) img {
  width: c(359) height c(521);
}


.taopiao {
  position: absolute;
  right: c(16);
  top: c(10);
  width: c(220);
  height: c(72);
  z-index: 2;
  // margin: c(31) auto;
  border none;
}
</style>

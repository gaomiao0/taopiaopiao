<template>
<div>
      <div class="vide">
        <video controls autoplay poster="../../../static/img/tqv-bg1.png">
            <source src="//cloud.video.taobao.com/play/u/1745440806/p/1/e/6/t/1/d/hd/50262328329.mp4"/>>
        </video>
    </div>
    <div class="vides">
        <video controls poster="../../../static/img/tqv-bg1.png">
            <source src="//cloud.video.taobao.com/play/u/1745440806/p/1/e/6/t/1/d/hd/50262328329.mp4"/>>
        </video>
    </div>
</div>
  
    
</template>
<script>
export default {
    
}
</script>
<style  scoped lang="stylus" rel="stylesheet/stylus">
    c(p) 
        (p/108)rem >
    .vide{
        width 100%;
        position fixed;
        left 0 ;
        top 0;
        z-index 3;
    }
    video{
        width 100%;
    }
</style>



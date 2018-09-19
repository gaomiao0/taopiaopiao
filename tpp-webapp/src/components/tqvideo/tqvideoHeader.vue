<template>
<div>
     <div class="tqvheader">
       <a :class="{'check':ischeck===0}" @click="ischeck=0">推荐</a>
       <a :class="{'check':ischeck===1}" @click="ischeck=1">淘气电影</a>
       <a :class="{'check':ischeck===2}" @click="ischeck=2">速看</a>
       <a :class="{'check':ischeck===3}" @click="ischeck=3">新片上映</a>
       <a :class="{'check':ischeck===4}" @click="ischeck=4">综艺</a>
       <a :class="{'check':ischeck===5}" @click="ischeck=5">搞笑 </a>
       <a :class="{'check':ischeck===6}" @click="ischeck=6">电视剧</a>
    </div>
    <div class="tqvideoOne" v-show="ischeck===0">
            <div class="tqvideoOneBox">
                <video controls>
                    <source src="//cloud.video.taobao.com/play/u/1745440806/p/1/e/6/t/1/d/hd/50262328329.mp4"/>>
                </video>
                <p class="tqvIntroduce">一部国产良心鬼怪电影，把中国捉妖术演活了，堪称神来之笔</p>
                <div class="tqvMessage box">
                    <div class="tqvSource box">
                        <img src="../../assets/img/tqv-2.png" alt="">
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
                <source src="//cloud.video.taobao.com/play/u/1745440806/p/1/e/6/t/1/d/hd/50262328329.mp4"/>>
            </video>
            <p class="tqvIntroduce">一部国产良心鬼怪电影，把中国捉妖术演活了，堪称神来之笔</p>
            <div class="tqvMessage box">
                <div class="tqvSource box">
                    <img src="../../assets/img/tqv-2.png" alt="">
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

    <div class="tqvideoTwo" v-show="ischeck===1">
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

     <div class="tqvideoThree" v-show="ischeck===2">
        <div class="tqvideoOneBox">
            <video controls>
                <source src="//cloud.video.taobao.com/play/u/1745440806/p/1/e/6/t/1/d/hd/50262328329.mp4"/>>
            </video>
            <p class="tqvIntroduce">一部国产良心鬼怪电影，把中国捉妖术演活了，堪称神来之笔</p>
            <div class="tqvMessage box">
                <div class="tqvSource box">
                    <img src="../../assets/img/tqv-2.png" alt="">
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
                <source src="//cloud.video.taobao.com/play/u/1745440806/p/1/e/6/t/1/d/hd/50262328329.mp4"/>>
            </video>
            <p class="tqvIntroduce">一部国产良心鬼怪电影，把中国捉妖术演活了，堪称神来之笔</p>
            <div class="tqvMessage box">
                <div class="tqvSource box">
                    <img src="../../assets/img/tqv-2.png" alt="">
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

    <div class="tqvideoFour" v-show="ischeck===3">
        <div class="tqvideoOneBox">
            <video controls>
                <source src="//cloud.video.taobao.com/play/u/1745440806/p/1/e/6/t/1/d/hd/50262328329.mp4"/>>
            </video>
            <p class="tqvIntroduce">一部国产良心鬼怪电影，把中国捉妖术演活了，堪称神来之笔</p>
            <div class="tqvMessage box">
                <div class="tqvSource box">
                    <img src="../../assets/img/tqv-2.png" alt="">
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
                <source src="//cloud.video.taobao.com/play/u/1745440806/p/1/e/6/t/1/d/hd/50262328329.mp4"/>>
            </video>
            <p class="tqvIntroduce">一部国产良心鬼怪电影，把中国捉妖术演活了，堪称神来之笔</p>
            <div class="tqvMessage box">
                <div class="tqvSource box">
                    <img src="../../assets/img/tqv-2.png" alt="">
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

    <div class="tqvideoFive" v-show="ischeck===4">
        <div class="tqvideoOneBox">
            <video controls>
                <source src="//cloud.video.taobao.com/play/u/1745440806/p/1/e/6/t/1/d/hd/50262328329.mp4"/>>
            </video>
            <p class="tqvIntroduce">一部国产良心鬼怪电影，把中国捉妖术演活了，堪称神来之笔</p>
            <div class="tqvMessage box">
                <div class="tqvSource box">
                    <img src="../../assets/img/tqv-2.png" alt="">
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
                <source src="//cloud.video.taobao.com/play/u/1745440806/p/1/e/6/t/1/d/hd/50262328329.mp4"/>>
            </video>
            <p class="tqvIntroduce">一部国产良心鬼怪电影，把中国捉妖术演活了，堪称神来之笔</p>
            <div class="tqvMessage box">
                <div class="tqvSource box">
                    <img src="../../assets/img/tqv-2.png" alt="">
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


    <div class="tqvideoSix" v-show="ischeck===5">
        <div class="tqvideoOneBox">
            <video controls>
                <source src="//cloud.video.taobao.com/play/u/1745440806/p/1/e/6/t/1/d/hd/50262328329.mp4"/>>
            </video>
            <p class="tqvIntroduce">一部国产良心鬼怪电影，把中国捉妖术演活了，堪称神来之笔</p>
            <div class="tqvMessage box">
                <div class="tqvSource box">
                    <img src="../../assets/img/tqv-2.png" alt="">
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
                <source src="//cloud.video.taobao.com/play/u/1745440806/p/1/e/6/t/1/d/hd/50262328329.mp4"/>>
            </video>
            <p class="tqvIntroduce">一部国产良心鬼怪电影，把中国捉妖术演活了，堪称神来之笔</p>
            <div class="tqvMessage box">
                <div class="tqvSource box">
                    <img src="../../assets/img/tqv-2.png" alt="">
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

    <div class="tqvideoSeven" v-show="ischeck===6">
        <div class="tqvideoOneBox">
            <video controls>
                <source src="//cloud.video.taobao.com/play/u/1745440806/p/1/e/6/t/1/d/hd/50262328329.mp4"/>>
            </video>
            <p class="tqvIntroduce">一部国产良心鬼怪电影，把中国捉妖术演活了，堪称神来之笔</p>
            <div class="tqvMessage box">
                <div class="tqvSource box">
                    <img src="../../assets/img/tqv-2.png" alt="">
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
                <source src="//cloud.video.taobao.com/play/u/1745440806/p/1/e/6/t/1/d/hd/50262328329.mp4"/>>
            </video>
            <p class="tqvIntroduce">一部国产良心鬼怪电影，把中国捉妖术演活了，堪称神来之笔</p>
            <div class="tqvMessage box">
                <div class="tqvSource box">
                    <img src="../../assets/img/tqv-2.png" alt="">
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

</div>
   
</template>

<script>
export default {
    data(){
        return{
            ischeck:0
        }
    }
}
</script>




<style lang="stylus" rel="stylesheet/stylus">
        c(p)
            (p/108)rem

.tqvheader{
    display: flex;
    width: 100%;
    height: 1.4rem;
    background: #c624c7;
    box-sizing: border-box;
    overflow-x auto
}

.tqvheader a{
    flex-shrink: 0;
    color: #fff;
    font-size:c(46);
    margin: 0 c(65) 0 c(42);
    line-height: c(134);
    text-decoration none;
    cursor pointer
    
}
.tqvheader a:last-child{
    padding-right:c(40); 
     background-position: c(20) c(143) 
}
.check{
    background: url("../../assets/img/tqv-1.png") no-repeat bottom center;
    // background-position: 0 c(120);
}
</style>
   

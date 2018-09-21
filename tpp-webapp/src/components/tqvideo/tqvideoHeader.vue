<template>
<div>
    <div class="tqvheader">
       <a @click="ischeck(id)" :class="{'check':ischecks==id}" v-for="(item,id) in nav">{{item.name}}</a>
       <!-- <a @click="ischeck('1')" :class="{'check':ischecks==1}">淘气电影</a>
       <a @click="ischeck('2')" :class="{'check':ischecks==2}">速看</a>
       <a @click="ischeck('3')" :class="{'check':ischecks==3}">新片上映</a>
       <a @click="ischeck('4')" :class="{'check':ischecks==4}">综艺</a>
       <a @click="ischeck('5')" :class="{'check':ischecks==5}">搞笑</a>
       <a @click="ischeck('6')" :class="{'check':ischecks==6}">电视剧</a> -->
    </div>

  
</div>

</template>

<script>
import bus from "../../assets/eventBus"
export default {
    data(){
        return{
            ischecks:0,
            
        }
    },
    props:{
        nav:''
    },
    methods:{
        ischeck:function(e){
          this.ischecks =e
           bus.$emit("tabEvent",this.ischecks)
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
     background-position: c(20) c(140)
}
.check{
    background: url("../../assets/img/tqv-1.png") no-repeat center bottom;

}
</style>


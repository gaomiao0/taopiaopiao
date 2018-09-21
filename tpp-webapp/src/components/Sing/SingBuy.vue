<template>
    <div class="buy">
      <a><i class="iconfont icon-heart"></i><span>关注</span></a>
      <p @click="func(2)">立即购买</p>
    </div>
</template>

<script>
    export default {
        name: "SingBuy",
       methods:{
           func(v){
               this.$emit("func",v)
             console.log(v)
           },
       }
    }
</script>

<style scoped>
.buy{
  width: 100%;
  height: 1.2rem;
  background: white;
  position: fixed;
  bottom: 0;
  display: flex;
font-size: 0.35rem;

}
.buy a{
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.buy a i{
  font-size: 0.5rem;
}
  .buy p{
    width: 85%;
    background: #ff389c;
    font-size: 0.4rem;
    line-height: 1.2rem;
    text-align: center;
    color: white;
  }
</style>

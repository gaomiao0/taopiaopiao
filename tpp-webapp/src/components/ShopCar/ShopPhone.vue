<template>
    <div class="pho">
      <div class="pho1">
        <a class="pho1a">
          <p>手机号</p>
          <span>购票成功后,会收到取票码短信</span>
        </a>
        <a class="pho1aa">
          <p>18291864413 <i class="iconfont icon-jiantou"></i></p>
        </a>
      </div>

      <div class="warn">
        <span>购票须知</span>
        <div class="warnp">
          <p>1.请确认场次和时间无误，购买成功后将不予退还</p>
          <p>2.由于设备故障等不可抗力因素，存在少量场次取消的情况会进行退票退款</p>
          <p>3.犹豫影院系统不稳定等因素，存在出票失败的情况，会进行退款</p>
          <p>4.购票成功后,会收到取票码短信</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ShopPhone"
    }
</script>

<style scoped>
.pho{
  /*height: 5rem;*/
  background: #f7f7f7;
  margin-bottom: 2.8rem;
  padding: 0.3rem 0;
}
  .pho1{
    padding: 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.38rem;
    margin-bottom:0.3rem;
    background: white;
    color: #9c9e9c;
  }
  .pho .pho1a p{
    line-height: 0.8rem;
    color: #000;
  }
.pho .pho1a span{
  line-height: 0.8rem;
  font-size: 0.34rem;

}
.pho .pho1aa p{
  font-size: 0.34rem;
}
.pho .pho1aa i{
  font-size: 0.38rem;
}
  .warn{
    background: white;
    padding-left: 0.3rem;
  }
  .warn span{
    display: block;
    font-size: 0.38rem;
    line-height: 0.8rem;
    padding: 0.3rem 0 ;
    border-bottom: 0.02rem solid #efefef;
  }
  .warnp{
    padding: 0.4rem 0.4rem 0.4rem 0;
    line-height: 0.7rem;
    color: #9c9e9c;
  }
</style>

<template>
    <div class="know">
      <span class="ks">购票须知</span>
      <p><span>演出时长</span>最低演出时长180分钟</p>
      <p><span>入场时间</span>演出前90分钟</p>
      <p><span>限购说明</span>每笔订单最多购买6张</p>
      <p><span>儿童说明</span>1.2米以上凭成人票入场,1.2米以下谢绝入场</p>
      <a>更多购票须知<i class="iconfont icon-jiantou"></i></a>
    </div>
</template>

<script>
    export default {
        name: "SingKnow"
    }
</script>

<style scoped>
.know{
  /*height: 8rem;*/
  background: white;
  padding: 0 0.3rem;
  font-size: 0.35rem;
  border-bottom: 0.01rem solid #ccc;
  border-top: 0.01rem solid #ccc;
  margin-bottom: 0.5rem;
}
.ks{
  display: block;
  font-size: 0.4rem;
  font-weight: 600;
  line-height: 1.5rem;
}
  .know p{
    line-height: 0.8rem;
    color: #636563;
  }
  .know p span{
    color: #9c9a9c;
    margin-right: 0.5rem;
  }
.know a{
  border-top: 0.01rem solid #ccc;
  display: block;
  line-height: 1.5rem;
  text-align: center;
  color: #ff106b;
  font-size: 0.35rem;
  margin-top: 0.3rem;
}
.know a i{
  font-size: 0.4rem;
  margin-left: 0.1rem;
}
</style>

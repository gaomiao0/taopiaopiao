<template>
    <div class="nav">
      <div class="nav1" @click="show(1)">
        <p class="navp">
          <a><i class="iconfont icon-dui"></i><span>先付先抢</span></a>
          <a><i class="iconfont icon-dui"></i><span>蚂蚁花呗</span></a>
          <a><i class="iconfont icon-dui"></i><span>电子钱包</span></a>
          <a><i class="iconfont icon-dui"></i><span>超级票</span></a>
        </p>
        <p class="navp1">+1<i class="iconfont icon-jiantou"></i></p>
      </div>

      <div class="nav1show" v-show="flag==1">
        <div class="navS" @click="show(0)">

        </div>
        <div class="navS1">
          <p class="navSp">票务说明</p>
          <div class="navS2">
          <a><i class="iconfont icon-dui"></i><span>先付先抢</span></a>
            <p>“先付先抢”是大麦网为广大用户推出的一项全新“特权”服务。凡是标有“先付先抢”活动图标的项目，只要在预售阶段付款成功，都将在正式开票前的2-24小时，获得优先于其他用户自主选座的权利。</p>
          <a><i class="iconfont icon-dui"></i><span>蚂蚁花呗</span></a>
          <p>该项目支持蚂蚁花呗付款。
          </p>
          <a><i class="iconfont icon-dui"></i><span>电子钱包</span></a>
          <p>本项目支持电子钱包。<br/>
            1. 电子钱包是由大麦网自主研发的第三方支付平台。<br/>
            2. 为每一个用户在购票过程中提供“简单、安全、快速”的在线支付解决方案<br/>
          </p>
          <a><i class="iconfont icon-dui"></i><span>超级票</span></a>
          <p>1. 本项目支持使用【电子钱包-超级票账户】消费，支付时优先扣减超级票余额。<br/>
            2. 超级票成功充值电子钱包后，享受全网通兑、分次消费、无有效期限制、无使用张数限制、秒杀、抢票等服务。<br/>
          </p>
          <a><i class="iconfont icon-dui"></i><span>返积分</span></a>
          <p>1. 【会员多倍积分】 大麦会员按不同等级可分别获得消费金额×50%到100%比例的积分返还。<br/>
            2. 您可以在积分商城兑换明星周边、演出票品、优惠卡券等商品，也可以参与抽奖活动，赢取幸运大礼。</p>
          </div>
        </div>
      </div>
      <div class="nav2" @click="show(2)">
        <span>{{sec2.sec2}}</span>
        <i class="iconfont icon-jiantou"></i>
      </div>
      <div class="nav1show" v-show="flag==2">
        <div class="navS" @click="show(0)"></div>
        <div class="navS3">
          <p class="navSp2">立即购买</p>
          <a>
            <span>时间</span>
            <p>09:30 周日</p>
          </a>
          <a>
            <span>场次</span>
            <p>20:00</p>
          </a>
        </div>
      </div>
      <div class="nav3">
        <span>{{sec2.sec3}}</span>
        <img src="../../../static/img/map.png"/>
      </div>
    </div>
</template>

<script>
    export default {
      name: "SingNav",
      data() {
        return {
          flag: 0,
          sec2:{}
        }
      },
      methods: {
        getjsons(){
          this.$http.get("http://localhost:3000/secc/1")
            .then((response)=> {
              this.sec2 = response.data
              console.log(response.data)
            })
        },
        show(f) {
          this.flag = f
        }
      },
      created(){
        this.getjsons();
      }
    }
</script>

<style scoped>
.nav{
  margin-top: 1.3rem;
  background: #f7f3f7;
  /*height: 20rem;*/

}
.nav1{
  background: #fff;
  line-height: 1.5rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;
  border-bottom: 0.01rem solid #ccc;
}
  .navp a{
    color: #9c9a9c;
    font-size: 0.32rem;
    margin-right: 0.1rem;
  }
  .navp a i{
color: #ff106b;
    font-size: 0.4rem;
    margin-right: 0.05rem;
  }
  .navp1{
    font-size: 0.32rem;
    color: #9c9a9c;
  }
  .navp1 i{
    font-size: 0.4rem;
    margin-left: 0.05rem;
  }
  .nav2{
    background: #fff;
    padding: 0 0.3rem;
    border-bottom: 0.01rem solid #ccc;
    line-height: 1.2rem;
    display: flex;
    justify-content: space-between;
    color: #636563;
    font-size: 0.35rem;
  }

.nav2 i{
  font-size: 0.4rem;
  color: #9c9a9c;
}
  .nav3{
    background: #fff;
    padding: 0 0.3rem;
    border-bottom: 0.01rem solid #ccc;
    line-height: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav3 img{
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
  }
  .nav3 span{
    color: #636563;
    font-size: 0.35rem;
  }
  .nav1show{
    height: 100%;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 90;
  }
  .navS{
    width: 100%;
    height: 100%;
    background: rgba(127,127,127,.4);
  }
  .navS1{
    width: 100%;
    height: 5rem;
    background: white;
    position: fixed;
    bottom: 0;
  padding: 0.3rem;

  }

  .navS1 .navSp{
    line-height: 1.2rem;
    width: 100%;
    font-size: 0.4rem;
    position: fixed;
    padding: 0;
    color: #000;
    text-align: center;
  }
  .navS2{
    margin-top: 1.2rem;
    overflow-y: scroll;
    height: 100%;
  }
  .navS1 a{
    display: block;
    color: #9c9a9c;
    font-size: 0.32rem;
    margin-right: 0.1rem;
    line-height: 0.8rem;
  }
.navS1 a i{
  color: #ff106b;
  font-size: 0.4rem;
  margin-right: 0.05rem;
}
  .navS1 p{
    color: #9c9a9c;
    padding: 0.3rem 0.4rem;
    line-height: 0.5rem;
  }
.navS3{
  width: 100%;
  height: 12rem;
  background: white;
  position: fixed;
  bottom: 0;

}
  .navSp2{
    line-height: 1.2rem;
    width: 100%;
    font-size: 0.4rem;
    position: fixed;
    bottom: 0;
    padding: 0;
    color: #fff;
    text-align: center;
    background: #ff389c;
  }
  .navS3 a{
    display:block;
    padding: 0.3rem;
    color: #9c9a9c;
    font-size: 0.35rem;
  }
  .navS3 a p{
    text-align: center;
    width: 2.5rem;
    height: 0.8rem;
    line-height: 0.8rem;
    border:0.01rem solid #ff389c;
    color: #ff389c;
    margin-top: 0.5rem;
  }
</style>

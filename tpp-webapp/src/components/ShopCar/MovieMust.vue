<template>
    <div class="moviemust">
      <div class="nav">
        <p class="navp1"><span>电影代金券</span><span>无代金券</span></p>
        <p class="navp2"><span>票价总计</span><a><span v-for="jg in cartsInfo">{{jg.pj}}</span>元</a></p>
      </div>

      <div class="nav2">
        <div class="navdiv">
          <i class="iconfont icon-VIP"></i>
          <a><p>万达影院全国通用影城卡</p>
            <span>开卡后,本单<b>立省5元</b></span>
          </a>
        </div>
        <div class="navi">
          <span>40元开卡</span><i class="iconfont icon-jiantou"></i>
        </div>
      </div>

      <div class="nav3">
        <div class="sec">
          <p>选购小食</p>
          <a><span>边吃边看更爽哦</span><img src="../../assets/img/bmh.png"></a>
        </div>
        <div class="car" v-for="(eat,sid) in eatc">
          <img :src=eat.eatpic>
          <div class="carp">
            <p class="carp1"><span>双人</span>{{eat.eatname}}</p>
            <a class="cara">
              <span><b>{{eat.eatprice}}</b>元</span>
              <p class="carap">
                <span @click="subqal(sid)"><i class="iconfont icon-reduce"></i></span>
                <b>{{eat.eatcount}}</b>
                <span @click="addqal(sid)"><i class="iconfont icon-jia"></i></span>
              </p>
            </a>
          </div>
        </div>

        <div class="carzj">
          <p>小食总计</p>
          <span>{{totalMoney}}</span>
        </div>
      </div>

      <div class="zzc" v-show="flag"> </div>
      <div class="money">


        <div class="money1" v-show="flag">
          <p class="mon1" ><span @click="mmp">取消</span>结算明细</p>
          <div class="mon2">
            <p class="mon2p">电影票<span>(含服务费4.5元一张)</span></p>
            <a class="mon2a"><p>特惠票</p>
              <span><b>惠</b><i>38.8</i>元×<em>1</em></span>
            </a>
          </div>
          <div class="mon2">
            <p class="mon2p">观影小食</p>
            <a class="mon2a"><p>中份爆/空心薯1盒+可乐2杯+休闲食品1袋</p>
              <span><i>38.8</i>元×<em>1</em></span>
            </a>
            <a class="mon2a"><p>中份爆/空心薯1盒+可乐2杯+休闲食品1袋</p>
              <span><i>38.8</i>元×<em>1</em></span>
            </a>

            <a class="mon2a"><p>中份爆/空心薯1盒+可乐2杯+休闲食品1袋</p>
              <span><i>38.8</i>元×<em>1</em></span>
            </a>
          </div>
        </div>


        <a class="mona"><p>不支持退票改签</p><span @click="mmp">应付<b><em>50</em>元</b><i class="iconfont icon-arrRight-fill"></i></span></a>
      </div>
      <div class="rmb">立即抢购</div>
    </div>


</template>

<script>
    export default {
        name: "MovieMust",
      data(){
          return{
            flag:false,
            totalMoney:0,
            "cartsInfo":[
              {
                "pj":30
              }
            ],
            "eatc":[
              {
                "eatpic":"../../assets/img/car1.png",
                "eatname":"中份爆/空心薯1盒+可乐2杯+休闲食品1袋",
                "eatprice":"57.1",
                "eatcount":"0"
              },
              {
                "eatpic":"../../assets/img/car1.png",
                "eatname":"中份爆/空心薯1盒+可乐2杯+休闲食品1袋",
                "eatprice":"57.1",
                "eatcount":"0"
              },
              {
                "eatpic":"../../assets/img/car1.png",
                "eatname":"中份爆/空心薯1盒+可乐2杯+休闲食品1袋",
                "eatprice":"57.1",
                "eatcount":"0"
              },
            ]
          }

      },
      methods:{
        mmp(){
          this.flag =  !this.flag
        },
        addqal(sid){
          this.eatc[sid].eatcount++,
            this.__counter(this.eatc)
        },
        subqal(sid){
          if(this.eatc[sid].eatcount <=0){
            this.eatc[sid].eatcount=0
          }else{
            this.eatc[sid].eatcount--,
              this.__counter(this.eatc)
          }

        }
      },
      __counter(shopData){
        this.totalMoney =0;
        for(let i in shopData){
              this.totalMoney += eatc[i].eatprice * eatc[i].eatcount;

          }

      },
      created(){
      }
    }
</script>

<style scoped>
.zzc{
  width: 100%;
  height: 8rem;
  background: rgba(191,191,191,.4);
  position: fixed;
  top: 0rem;
}
  .moviemust{
    background: #f7f7f7;
  /*margin-bottom: 0.3rem;*/
  }
  .nav{
    padding: 0 0.3rem;
    font-size: 0.35rem;
    color: #313031;
    background: #fff;
  }
  .nav p{
    line-height: 1.2rem;
    display: flex;
    justify-content: space-between;

  }
  .nav .navp1{
    border-bottom: 0.02rem solid #efefef;
  }
  .navp1 span:nth-child(2){
    color: #cecbce;
  }
.navp2 a{
  color: #ff4d63;
}
  .navp2 a span{
    font-size: 0.4rem;

  }
  .nav2{
    display: flex;
    justify-content: space-between;
    font-size: 0.35rem;
    align-items: center;
    padding: 0.2rem 0.3rem;
    background: #fff;
    margin: 0.3rem 0;
    color: #313031;
  }
  .navdiv{
    display: flex;
    align-items: center;
    line-height: 0.8rem;
  }
  .navdiv span{
    color: #9c9a9c;
  }
  .navdiv span b{
    font-weight: 100;
    color: #6bc773;
  }
  .navdiv i{
    display: block;
    font-size: 0.7rem;
    color: #6bc773;
    margin-right: 0.3rem;
  }
  .navi{
    color: #9c9a9c;
  }
  .navi i{
    font-size: 0.42rem;
    margin-left: 0.1rem;
  }
  .nav3{
    padding: 0 0.3rem;
    background: #fff;
  }
  .sec{
    padding: 0.3rem 0;
    display: flex;
  justify-content: space-between;
    align-items: center;
    font-size: 0.35rem;
    border-bottom: 0.02rem solid #efefef;
  }
  .sec a{
    display: flex;
    align-items: center;
    color: #9c9a9c;
  }
  .car{
    display: flex;
    padding: 0.3rem 0;
    font-size: 0.35rem;
    border-bottom: 0.02rem solid #efefef;
  }
  .car img{
    width: 2.4rem;
    height:2.4rem;
    margin-right: 0.3rem;
  }
  .carp .carp1 span{
    color: #ffb66b;
    font-size: 0.28rem;
    display: inline-block;
    padding: 0 0.04rem;
    line-height: 0.4rem;
    text-align: center;
    border: 0.01rem solid #ffb66b;
    margin-right: 0.03rem;
  }
  .cara{
    display: flex;
    margin-top: 0.8rem;
    justify-content: space-between;
  }
  .cara b{
    font-weight: 100;
  }
  .cara b:nth-child(1){
    color: red;
  }
  .carap{
    display: flex;
  }
  .cara .carap span{
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    border:0.02rem solid red;
    text-align: center;
    line-height: 0.5rem;

  }
  .carap span i{
    font-size: 0.4rem;
  }
  .carap span:nth-child(1){
    border-color: #dedbde;
    color: #adaaad;
  }
  .carap span:nth-child(3){
    border:none;
    background: #ff758c;
    color: #fff;
  }
  .carap b{
    margin: 0 0.2rem;
  }

  .carzj{
    line-height: 1.4rem;
    display: flex;
  justify-content: space-between;
    font-size: 0.35rem;
  }
  .carzj span{
    color: red;
  }
  .money{
    width: 100%;
    /*padding: 0 0.3rem;*/
    background: #fff;
    position: fixed;
    bottom: 1.4rem;
    border-top: 0.02rem solid #efefef;
  }

  .money .mona{
    display: flex;
    justify-content: space-between;
    line-height: 1.4rem;
    font-size: 0.35rem;
    color: #9c9a9c;
    margin: 0 0.3rem;
  }
  .money .mona span b{
    font-weight: 100;
    font-size: 0.3rem;
    color: #ff4d63;
  }
  .money .mona span b em{
    font-size: 0.42rem;
  }
  .money .mona i{
    font-size: 0.4rem;
  }
  .money1{
    height: 8.5rem;
    /*background: pink;*/
    /*display: none;*/
  }
  .money1 .mon1{
    color: #333;
    line-height: 1.5rem;
    font-size: 0.4rem;
    text-align: center;
  padding: 0 0.3rem;
    border-bottom: 0.02rem solid #efefef;
  }
  .money1 .mon1 span{
    font-size: 0.36rem;
    float: left;
    color: #a9a9a9;
  }
  .money1 .mon2{
    padding: 0.3rem;
    border-bottom: 0.02rem solid #efefef;
  }
  .mon2a span b{
    display: inline-block;
    width: 0.45rem;
    height: 0.45rem;
    background: #fea54c;
    text-align: center;
    line-height: 0.45rem;
    color: white;
    margin-right: 0.1rem;
  }
  .mon2 .mon2p{
    line-height: 0.8rem;
    font-size: 0.4rem;
  }
  .mon2 .mon2a{
    display: flex;
    justify-content: space-between;
    color: #a9a9a9;
    font-size: 0.35rem;
    line-height: 0.85rem;
  }
  .mon2 .mon2p span{
    font-size: 0.34rem;
    color: #a9a9a9;
  }
  .rmb{
    width: 100%;
    line-height: 1.4rem;
    text-align: center;
    background: #ff5973;
    color: #fff;
    font-size: 0.5rem;
    position: fixed;
    bottom: 0rem;
  }
</style>

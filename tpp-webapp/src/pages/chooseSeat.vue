<template>
<div class="choseSeat" v-if="!loading">
  <div class="header">
      <div class="h_top">
        <a @click="goback" class="iconfont icon-arrow-right-copy"></a>
        <span>西安万达影城龙城铭园店</span>
        <a class="iconfont icon-fenxiang1" @click="sharebox()"></a>
      </div>
      <div class="h-cen">
        <div class="tit">
          <span>反贪风暴3
            <!--{{cinema.title}}-->
          </span>
          <p><span>今天09-21&nbsp; </span><span>
            <!--{{cinema.movietime[0].today[0].start}}-{{cinema.movietime[0].today[0].end}}-->
            11:35-13:51
          </span><span>&nbsp; (雁塔区丈八北路与科技二路交汇处西北角)</span></p>
        </div>
        <img src="../assets/img/gxz1.png" alt="">
      </div>
      <div class="h_bot">
        <div id="legend"></div>
      </div>
  </div>
  <div class="con" id="seat-map">
    <h1>3厅（激光厅）荧幕</h1>
    <div class="bg"></div>
    <div class="tpp"></div>
  </div>
  <div class="footer">
    <ul class="f_top" id="selected-seats">
      <!--<li class="tips">
        <div class="tip">
          <span>10排4座</span>
          <span class="price"><b>惠</b><i>22.9</i>元</span>
        </div>
        <i class="iconfont icon-cuo"></i>
      </li>-->
    </ul>
    <router-link to="/ShopCar" class="f_bot">
      <i id="total">0</i>元  确认选座
    </router-link>
  </div>
  <div class="shareways">
    <div class="t_box">
      <a href="javascript:;">
        <img src="../assets/img/gwx.png" alt="">
        <span>微信好友</span>
      </a>
      <a href="javascript:;">
        <img src="../assets/img/gzfb.png" alt="">
        <span>支付宝</span>
      </a>
      <a href="javascript:;">
        <img src="../assets/img/gdd.png" alt="">
        <span>钉钉</span>
      </a>
      <a href="javascript:;">
        <img src="../assets/img/gqq.png" alt="">
        <span>QQ</span>
      </a>
    </div>
    <div class="b_box" @click="close()">
      取消
    </div>
  </div>
  <div class="zzc" @click="close()"></div>
</div>
</template>

<script>
  import $ from 'jquery'
  import '../assets/css/seat.css'
  import '../assets/jquery.seat-charts.min'
    export default {
        name: "chooseSeat",
      data(){
          return{
            cinema:{},
            pri:0,
            loading:false
          }
      },
      methods:{
        askseatdata(id){
          // console.log(id)
          this.loading=true
          let that = this
          this.$http.get("http://localhost:3000/space/"+id)
            .then((response)=>{
              // console.log(response)
              this.cinema = response.data;
              this.pri = this.cinema.movietime[0].today[0].price
              // console.log(this.pri)
              that.loading=false;
            })
        },
        sharebox(){
          $(".shareways").addClass("animated fadeInUp").css({"display":"block"});
          $(".zzc").fadeIn(200)
        },
        close(){
          $(".shareways").removeClass("animated fadeInDown").css({"display":"none"});
          $(".zzc").fadeOut(200)
        },
        goback(){
          this.$router.go(-1)
        }
      },
      created(){
        // this.askseatdata(this.$route.params.id)
      },
      mounted(){
        var price = 53; //票价
        $(document).ready(function() {
          var $cart = $('#selected-seats'), //座位区
            $counter = $('#counter'), //票数
            $total = $('#total'); //总计金额

          var sc = $('#seat-map').seatCharts({
            map: [  //座位图
              'aaaaaaaaaaaaaaaaaa',
              'aaaaaaaaaaaaaaaaaa',
              'aaaaaaaaaaaaaaaaaa',
              'aaaaaaaaaaaaaaaaaa',
              'aaaaaaaaaaaaaaaaaa',
              '__________________',
              'aaaaaaaaaaaaaa',
              'aaaaaaaaaaaaaaaaaa',
              'aaaaaaaaaaaaaaaaaa',
              'aaaaaaaaaaaaaaaaaa',
              'aaaaaaaaaaaaaaaaaa',
              'aaaaaaaaaaaaaaaaaa',
              'aaaaaaaaaaaaaaaaaa',
              'aaaaaaaaaaaaaaaaaa',
              'aaaaaaaaaaaaaaaaaa',
              'aaaaaaaaaaaaaaaaaaa',
            ],
            legend : { //定义图例
              node : $('#legend'),
              items : [
                [ 'a', 'available',   '可选座' ],
                [ 'a', 'unavailable', '已售出']
              ]
            },
            click: function () { //点击事件
              if (this.status() == 'available') { //可选座
                $('<li>'+(this.settings.row+1)+'排'+this.settings.label+'座</li>')
                  .attr('id', 'cart-item-'+this.settings.id)
                  .data('seatId', this.settings.id)
                  .appendTo($cart);

                $counter.text(sc.find('selected').length+1);
                $total.text(recalculateTotal(sc)+price);

                return 'selected';
              } else if (this.status() == 'selected') { //已选中
                //更新数量
                $counter.text(sc.find('selected').length-1);
                //更新总计
                $total.text(recalculateTotal(sc)-price);

                //删除已预订座位
                $('#cart-item-'+this.settings.id).remove();
                //可选座
                return 'available';
              } else if (this.status() == 'unavailable') { //已售出
                return 'unavailable';
              } else {
                return this.style();
              }
            }
          });
          //已售出的座位
          sc.get(['7_9','7_10','9_9','9_10','9_8','10_10','10_9','11_9','11_10', '11_11', '11_8']).status('unavailable');

        });
        //计算总金额
        function recalculateTotal(sc) {
          var total = 0;
          sc.find('selected').each(function () {
            total += price;
          });
          return total;
        }
      }
    }
</script>

<style scoped lang="less">
a:link {
   text-decoration: none !important;
 }
a:visited {
  text-decoration: none !important;
}
a:hover {
  text-decoration: none !important;
}
a:active {
  text-decoration: none !important;
}
.choseSeat{
  height: 100%;
  display: flex;
  flex-direction: column;
  position:relative;
}
.header{
  width:100%;
  .h_top{
    display: flex;
    height:100/75rem;
    align-items: center;
    justify-content: space-between;
    font-size: 34/75rem;
    color:#000000;
    padding:0 34/75rem;
    a{
      font-size: 37/75rem;
      color:#000000;
    }
  }
  .h-cen{
    height:160/75rem;
    display: flex;
    border-top:1px solid #888888;
    border-bottom:1px solid #888888;
    overflow-x: hidden;
    background: #ffffff;
    img{
      max-width:340/75rem;
      max-height: 155/75rem;
    }
    .tit{
      flex: 1;
      height:100%;
      font-size:32/75rem;
      padding:36/75rem 10/75rem 0 32/75rem;
      color:#1f1f1f;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      p{
        width:100%;
        font-size:26/75rem ;
        color:#737373;
        margin-top:20/75rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .h_bot{
    height:1.2rem;
  }
}
.con{
  width:100%;
  flex: 1;
  overflow-y: scroll;
  position:relative;
  .bg{
    height:90%;
    width:50/75rem;
    border-radius: 29/75rem;
    background: rgba(144,144,144,.2);
    position:absolute;
    left: 0;
    top:6%;
  }
  .tpp{
    width: 100%;
    height:44/75rem;
    background: url(../assets/img/gtpp.png) no-repeat center top;
    background-size: 140/75rem 44/75rem;
    position:absolute;
    left: 0;
    bottom:0.2rem;
  }
  h1{
    font-size:24/75rem ;
    color:#292929;
    height:50/75rem;
    text-align: center;
    background: url(../assets/img/gytbg.png) no-repeat center top;
    background-size: 380/75rem 38/75rem;
  }
}
.footer{
  width:100%;
  height:240/75rem;
  border-top:1px solid #ebebeb;
  position:fixed;
  left:0;
  bottom:0;
#selected-seats{
  border-top:1px solid #ebebeb;
  height:126/75rem;
  display: flex;
  padding:7.5/75rem 31/75rem;
  box-sizing: border-box;
  overflow-x: scroll;
  overflow-y: scroll;
  align-items: center;
  li{
    width:174/75rem;
    height:79/75rem;
    background:url("../assets/img/gseat1.png");
    background-size:174/75rem 78/75rem;
    display: flex;
    align-items: center;
    color:#8b8b8b;
    padding-left:35/75rem;
    box-sizing: border-box;
    .tip{
      font-size:24/75rem;
      color:#000000;
      .price{
        color:#ff3d56;
        display: flex;
        b{
          width:24/75rem;
          height:24/75rem;
          text-align: center;
          font-size:16/75rem;
          color:#ffffff;
          background: #fea144;
          border-radius: 6px;
          margin-top:5px;
          margin-right:3px;
        }
      }
    }
    .icon-cuo{
      font-size: 32/75rem;
      margin-left:5px;
    }
  }
}
.f_bot{
  display: block;
  width:100%;
  height:114/75rem;
  line-height:114/75rem;
  background:#ff6d8d ;
  color:#ffffff;
  font-size:34/75rem;
  text-align: center;
  letter-spacing: 1px;
}
}
.shareways{
  width: 100%;
  height:380/75rem;
  background: #f5f5f5;
  border-top-right-radius: 22/75rem;
  border-top-left-radius: 22/75rem;
  overflow: hidden;
  position:absolute;
  left: 0;
  bottom:0;
  z-index:100;
  display: none;
  .t_box{
    height:245/75rem;
    background: #ffffff;
    padding:0 34/75rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    margin-bottom:22/75rem;
    a{
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
        width:105/75rem;
        height:105/75rem;
      }
      span{
        color:#9b9b9b;
        font-size:22/75rem;
        margin-top:20/75rem;
        letter-spacing: 1px;
      }
    }
  }
  .b_box{
    height:115/75rem;
    background: #ffffff;
    line-height:115/75rem;
    color:#3a3a3a;
    font-size:34/75rem;
    text-align: center;
  }
}
.zzc{
  height:100%;
  width:100%;
  background: rgba(0,0,0,.3);
  letter-spacing: 3px;
  display: none;
  z-index:50;
  position:absolute;
  left: 0;
  top:0;
}
</style>

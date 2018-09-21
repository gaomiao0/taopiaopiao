<template>
<div class="choseSeat">
  <div class="header">
      <div class="h_top">
        <a class="iconfont icon-arrow-right-copy"></a>
        <span>西安万达影城龙城铭园店</span>
        <a class="iconfont icon-fenxiang1"></a>
      </div>
      <div class="h-cen">
        <div class="tit">
          <span>反贪风暴3</span>
          <p><span>今天09-21&nbsp; </span><span> 16:40-19:08 </span><span>&nbsp; (雁塔区丈八北路与科技二路交汇处西北角)</span></p>
        </div>
        <img src="../assets/img/gxz1.png" alt="">
      </div>
      <div class="h_bot">
        <div id="legend"></div>
      </div>
  </div>
  <div class="con" id="seat-map">
    <ul id="selected-seats"></ul>
  </div>
  <div class="footer">
    <ul class="f_top">
      <li class="tips">
        <div class="tip">
          <span>10排4座</span>
          <span class="price"><b>惠</b><i>22.9</i>元</span>
        </div>
        <i class="iconfont icon-cuo"></i>
      </li>
    </ul>
    <div class="f_bot">
      <i id="total">22.9</i>元  确认选座
    </div>
  </div>
</div>
</template>

<script>
  import $ from 'jquery'
  import '../assets/css/seat.css'
  import '../assets/jquery.seat-charts.min'
    export default {
        name: "chooseSeat",
        mounted(){
          var price = 22.9; //票价
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
            sc.get(['1_2', '4_4','4_5','6_6','6_7','8_5','8_6','8_7','8_8', '10_1', '10_2']).status('unavailable');

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
.choseSeat{
  display: flex;
  flex-direction: column;
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
}
.con{
  flex: 1;
  overflow-y: scroll;
}
.footer{
  width:100%;
  border-top:1px solid #ebebeb;
  .f_top{
    height:126/75rem;
    display: flex;
    padding:23/75rem 31/75rem;
    box-sizing: border-box;
    overflow-x: scroll;
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
    height:114/75rem;
    line-height:114/75rem;
    background:#ff6d8d ;
    color:#ffffff;
    font-size:34/75rem;
    text-align: center;
    letter-spacing: 1px;
  }
}
</style>

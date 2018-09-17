<template>
  <div>
  <div class="header">
     <i class="iconfont icon-jiantou-copy headerleft"></i>
    <div class="qrdd"> <p>确认订单</p></div>
    <div class="dtime">
      <span class="headerright"><i class="iconfont icon-shijian "></i></span>
      <span class="time">9:11</span>
    </div>
  </div>

  <div class="moviemu">
 <p><span >反贪风暴3</span><i>1张</i></p>
    <p>今天09-17 21:45 - 23:25 (国语2D)</p>
    <p>西安民乐园万达广场店</p>
    <p>RealD-9号厅 10排16座</p>
  </div>
  </div>
</template>

<script>
    export default {
        name: "ShopCarHeader"
    }
    $(function(){
      var m=9;
      var s=11;
      setInterval(function(){

        if(s<10){
          //如果秒数少于10在前面加上0
          $('.time').html(m+':0'+s);
        }else{
          $('.time').html(m+':'+s);
        }
        s--;
        if(s<0){
          //如果秒数少于0就变成59秒
          s=59;
          m--;
        }
      },1000)
    })
  $().ready(function(){
    $(window).scroll(function(){
      var height = $(".header").offsetHeight;
      var scrollTop = $(window).scrollTop();
      if(scrollTop>height){
        $(".header").addClass("active");
        $(".header").children(".headerleft").css("color","black");
        $(".header").find(".qrdd").css("display","block");
        $(".header").find(".icon-shijian").css("color","black");
        $(".header").find(".time").css("color","black");
        $(".header").find(".headerright").css("background","white");
        $(".header").find(".time").css("background","white");
      }else{
        $(".header").removeClass("active");
        $(".header").find(".qrdd").css("display","none");
        $(".header").children(".headerleft").css("color","white");
        $(".header").find(".icon-shijian").css("color","white");
        $(".header").find(".time").css("color","white");
        $(".header").find(".headerright").css("background","rgb(173,182,206)");
        $(".header").find(".time").css("background","rgb(173,182,206)");
      }
    });
  });

</script>

<style scoped>
  .header{
    width: 100%;
    height:1.3rem;
    background:rgb(140,158,189);
    padding: 0 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top:0;
    left:0;
box-shadow: none;
  }
  .header.active{
    background:rgb(255,255,255);
    opacity: 0.8;
    transition: background 2s;
  }
  .moviemu{
    height: 3.7rem;
    background: #8c9ab5;
    padding: 1.3rem 0 0 0.3rem;
  }
.moviemu p{
  line-height: 0.6rem;
  color: #efeff7;
}
  .moviemu p:first-child{

    line-height: 1.2rem;
  }
  .moviemu p:first-child span{
  font-size: 0.7rem;
    margin-right: 0.3rem;
  }
  .header i {
    display: flex;
    font-size: 0.6rem;
    color: white;
  }
  .qrdd{
    display: none;
    font-size: 0.4rem;
  }
  .header .headerright{
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background: rgb(173,182,206);
    margin-right: -0.3rem;
    z-index: 1;
  }
  .headerright i{
    font-size: 0.4rem;
    justify-content: center;

  }
  .dtime{
    display: flex;
    height: 0.6rem;
    line-height: 0.6rem;

  }
  .time{
    display: block;
    padding: 0 0.5rem ;
    background: rgb(173,182,206);
    color: white;
  }
</style>

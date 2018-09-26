<template>
  <div>
  <div class="header">
     <i @click="goback" class="iconfont icon-jiantou-copy headerleft"></i>
    <div class="qrdd"> <p>确认订单</p></div>
    <div class="dtime">
      <span class="headerright"><i class="iconfont icon-shijian "></i></span>
      <span class="time">9:11</span>
    </div>
  </div>

  <div class="moviemu" v-for="s in sm">
 <p><span >{{s.movie1}}</span><i>{{s.movie2}}</i>张</p>
    <p>{{s.movie3}}</p>
    <p>{{s.movie4}}</p>
    <p>{{s.movie5}}</p>
  </div>
  </div>
</template>

<script>
    export default {
        name: "ShopCarHeader",
      data(){
        return{
        sm:[]
        }
      },
      methods:{
        getjsons(){
          this.$http.get("http://localhost:3000/ShopMovie")
            .then((response)=> {
              this.sm = response.data
            })
        },
        goback(){
          this.$router.go(-1)
        }
      },
      mounted(){

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
        }),
        $(function(){
      $(window).scroll(function(){
        // var height = $(".moviemu").offset().top;
        var scrollTop = $(window).scrollTop();
        if(scrollTop>40 && scrollTop<60){
          $(".header").css("opacity","0.2");
          $(".header").css("background","rgb(173,183,203)");
          $(".header").children(".headerleft").css("color","black");
          $(".header").find(".qrdd").css("display","block");
          $(".header").find(".icon-shijian").css("color","black");
          $(".header").find(".time").css("color","black");
          $(".header").find(".headerright").css("background","white");
          $(".header").find(".time").css("background","white");
        }else if(scrollTop>60 && scrollTop<100){
          $(".header").css("opacity","0.5");
          $(".header").css("background","rgb(197,205,219)");
          $(".header").children(".headerleft").css("color","black");
          $(".header").find(".qrdd").css("display","block");
          $(".header").find(".icon-shijian").css("color","black");
          $(".header").find(".time").css("color","black");
          $(".header").find(".headerright").css("background","white");
          $(".header").find(".time").css("background","white");
        }else if(scrollTop>100 && scrollTop<150){
          $(".header").css("opacity","0.7");
          $(".header").css("background","rgb(227,231,238)");
          $(".header").children(".headerleft").css("color","black");
          $(".header").find(".qrdd").css("display","block");
          $(".header").find(".icon-shijian").css("color","black");
          $(".header").find(".time").css("color","black");
          $(".header").find(".headerright").css("background","white");
          $(".header").find(".time").css("background","white");
        }
        else if(scrollTop>150){
          $(".header").css("opacity","1");
          $(".header").css("background","white");
          $(".header").children(".headerleft").css("color","black");
          $(".header").find(".qrdd").css("display","block");
          $(".header").find(".icon-shijian").css("color","black");
          $(".header").find(".time").css("color","black");
          $(".header").find(".headerright").css("background","white");
          $(".header").find(".time").css("background","white");
        }else{
          $(".header").css("opacity","1");
          $(".header").css("background","rgb(140,158,189)");
          $(".header").find(".qrdd").css("display","none");
          $(".header").children(".headerleft").css("color","white");
          $(".header").find(".icon-shijian").css("color","white");
          $(".header").find(".time").css("color","white");
          $(".header").find(".headerright").css("background","rgb(173,182,206)");
          $(".header").find(".time").css("background","rgb(173,182,206)");
        }
      });
    });
      },
      created(){
        this.getjsons();
      }
    }


</script>

<style scoped>
  a:link{text-decoration: none!important;  }
  a:visited{ text-decoration: none !important;}
  a:hover{text-decoration: none!important;  }
  a:active{text-decoration: none!important;  }
  a:focus{text-decoration: none!important;  }
  .header{
    width: 100%;
    line-height:1.3rem;
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

  .moviemu{
    height: 3.7rem;
    background:rgb(140,158,189);
    padding: 1.3rem 0 0 0.3rem;
  }
.moviemu p{
  line-height: 0.6rem;
  color: #efeff7;
}
  .moviemu p:first-child{
  margin-top: 0.2rem;
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

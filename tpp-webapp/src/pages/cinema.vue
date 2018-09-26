<template>
    <div v-if="!loading" class="bigbox">
      <cinema-header :title="cinema.title" v-on:child-say="gotoData"></cinema-header>
      <div class="wapper" ref="wapper">
      <cinema-swiper></cinema-swiper>
      <cinema-content :cinemas="cinema.dates[flag]"></cinema-content>
      </div>
    </div>
</template>

<script>
    import CinemaHeader from "../components/TppCinema/CinemaHeader";
    import CinemaSwiper from "../components/TppCinema/CinemaSwiper"
    import CinemaContent from "../components/TppCinema/CinemaContent";
    import { Indicator } from 'mint-ui';
    import BScroll from 'better-scroll'
    export default {
        name: "cinema",
        components: {CinemaContent, CinemaSwiper,CinemaHeader},
        props:["idx"],
        data(){
            return{
              cinema:{},
              loading:false,
              flag:0,
              dropDown:false
            }
        },
        methods:{
          askCinemaData(id){
            Indicator.open({
              text: 'Loading...',
              spinnerType: 'fading-circle'
            });
            this.loading=true;
            let that = this;
            this.$http.get("http://localhost:3000/cinema/"+id)
              .then((response)=>{
                // console.log(response)
                this.cinema = response.data;
                // console.log(response.data)
                that.loading=false;
                Indicator.close();
                // console.log(this.cinema)
              })
          },
          gotoData(n){
            this.flag = n
            // console.log(this.flag)
          },
          scrollFn(){
            this.$nextTick(() => {
              if (!this.scroll) {
                this.scroll = new BScroll(this.$refs.wapper,{
                  click: true,
                  scrollY: true,
                  probeType: 3
                });
              }else{
                this.scroll.refresh();
              }
              this.scroll.on('scroll', (pos) => {
                console.log(pos.y,this.dropDown)
                //如果下拉超过50px 就显示下拉刷新的文字
                if(pos.y>50){
                  this.dropDown = true
                }else{
                  this.dropDown = false
                }
              })
              //touchEnd（手指离开以后触发） 通过这个方法来监听下拉刷新
              this.scroll.on('touchEnd', (pos) => {
                // 下拉动作
                if(pos.y > 50){
                  console.log("下拉刷新成功")
                  this.dropDown = false
                }
                //上拉加载 总高度>下拉的高度+10 触发加载更多
                if(this.scroll.maxScrollY>pos.y+10){
                  console.log("加载更多")
                  //使用refresh 方法 来更新scroll  解决无法滚动的问题
                  this.scroll.refresh()
                }
                console.log(this.scroll.maxScrollY+"总距离----下拉的距离"+pos.y)
              })
              console.log(this.scroll.maxScrollY)
            });
          }
        },
        created(){
            this.askCinemaData(this.$route.params.id)
        },
        mounted(){
            // this.reurl()
          this.scrollFn()
        }
    }
</script>

<style scoped>
.bigbox{
  background: #ffffff;
}
.wapper{
  height:830px;
  /*overflow: hidden;*/
}.wapper{
   height:830px;
   /*overflow: hidden;*/
 }
</style>

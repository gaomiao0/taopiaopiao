<template>
    <div v-if="!loading" class="bigbox">
      <cinema-header :title="cinema.title" v-on:child-say="gotoData"></cinema-header>
      <cinema-swiper></cinema-swiper>
      <cinema-content :cinemas="cinema.dates[flag]"></cinema-content>
    </div>
</template>

<script>
    import CinemaHeader from "../components/TppCinema/CinemaHeader";
    import CinemaSwiper from "../components/TppCinema/CinemaSwiper"
    import CinemaContent from "../components/TppCinema/CinemaContent";
    export default {
        name: "cinema",
        components: {CinemaContent, CinemaSwiper,CinemaHeader},
        props:["idx"],
        data(){
            return{
              cinema:{},
              loading:false,
              flag:0
            }
        },
        methods:{
          askCinemaData(id){
            this.loading=true;
            let that = this;
            this.$http.get("http://localhost:3000/cinema/"+id)
              .then((response)=>{
                // console.log(response)
                this.cinema = response.data;
                // console.log(response.data)
                that.loading=false;
                // console.log(this.cinema)
              })
          },
          gotoData(n){
            this.flag = n
            // console.log(this.flag)
          },
        },
        created(){
            this.askCinemaData(this.$route.params.id)
        },
        mounted(){
            // this.reurl()
        }
    }
</script>

<style scoped>
.bigbox{
  background: #ffffff;
}
</style>

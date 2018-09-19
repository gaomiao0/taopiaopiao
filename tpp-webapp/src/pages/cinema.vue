<template>
    <div>
      <cinema-header></cinema-header>
      <cinema-swiper></cinema-swiper>
      <cinema-content></cinema-content>
    </div>
</template>

<script>
    import CinemaHeader from "../components/TppCinema/CinemaHeader";
    import CinemaSwiper from "../components/TppCinema/CinemaSwiper"
    import CinemaContent from "../components/TppCinema/CinemaContent";
    export default {
        name: "cinema",
        components: {CinemaContent, CinemaSwiper,CinemaHeader},
        data(){
            return{
              cinema:[]
            }
        },
        methods:{
          askCinemaData(){
            this.$http.get("http://localhost:3000/cinema")
              .then((response)=>{
                // console.log(response)
                this.cinema = response.data
              })
          }
        },
        created(){
            this.askCinemaData()
        }
    }
</script>

<style scoped>

</style>

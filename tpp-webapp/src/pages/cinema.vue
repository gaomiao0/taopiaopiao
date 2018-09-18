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
      components: {CinemaContent, CinemaSwiper,CinemaHeader}
    }
</script>

<style scoped>

</style>

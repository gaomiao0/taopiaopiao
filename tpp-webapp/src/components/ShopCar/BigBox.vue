<template>
  <div>
    <movie-must></movie-must>
  <shop-phone></shop-phone>
  </div>
</template>

<script>
    import MovieMust from "./MovieMust";
    import ShopPhone from "./ShopPhone";
    export default {
        name: "BigBox",
      components: {MovieMust,ShopPhone}
    }
</script>

<style scoped>

</style>

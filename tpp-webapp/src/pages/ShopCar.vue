<template>
  <div>
  <shop-car-header></shop-car-header>
  <big-box></big-box>
  </div>
</template>

<script>
  import ShopCarHeader from "../components/ShopCar/ShopCarHeader";
  import BigBox from "../components/ShopCar/BigBox";
    export default {
        name: "ShopCar",
      components: {BigBox, ShopCarHeader}
    }
</script>

<style scoped>

</style>

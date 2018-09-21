<template>
  <div>
<SingHeader></SingHeader>
    <SingBig></SingBig>
    <SingBuy></SingBuy>
  </div>
</template>

<script>
    import SingHeader from "../components/Sing/SingHeader";
    import SingBig from "../components/Sing/SingBig";
    import SingBuy from "../components/Sing/SingBuy";
    export default {
        name: "Sing",
      components: {SingBuy, SingBig, SingHeader}
    }
</script>

<style scoped>

</style>

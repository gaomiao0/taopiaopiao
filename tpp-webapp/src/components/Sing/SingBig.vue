<template>
  <div class="big">
<Singbg></Singbg>
    <SingNav></SingNav>
    <SingSec></SingSec>
    <SingKnow></SingKnow>
  </div>
</template>

<script>
    import Singbg from "./Singbg";
    import SingNav from "./SingNav";
    import SingSec from "./SingSec";
    import SingKnow from "./SingKnow";
    export default {
        name: "SingBig",
      components: { SingKnow, SingSec, SingNav, Singbg}
    }
</script>

<style scoped>
.big{
  background: #f7f3f7;
  /*height: 20rem;*/
  padding-bottom: 1.5rem;
}
</style>

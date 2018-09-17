<template>
  <div class="">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    components:{
      FooterGuide
    },
  }
</script>

<style>

</style>

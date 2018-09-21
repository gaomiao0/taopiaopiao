<template>
  <div class="con">
    <div class="changci">
      今天有场次
    </div>
    <ul>
    <cinema-content-eachli :cn="n"  v-for="n in cinemas.weekdata" :key="n.id"></cinema-content-eachli>
    </ul>
  </div>
</template>

<script>
  import CinemaContentEachli from "./CinemaContentEachli";

  export default {
    name: "CinemaContent",
    components: {CinemaContentEachli},
    props: ["cinemas"]
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  c(k) {
    (k / 75) rem
  }

  a:link {
    text-decoration: none !important;
  }

  a:visited {
    text-decoration: none !important;
  }

  a:hover {
    text-decoration: none !important;
  }

  a:active {
    text-decoration: none !important;
  }

  a:focus {
    text-decoration: none !important;
  }

  .con {
    width 100%
    background #f7f7f7
    .changci {
      line-height c(84)
      font-size c(26)
      color #989798
      padding-left c(34)
    }
    ul {
      padding 0 c(33)
      box-sizing border-box
      background #ffffff
    }
  }

</style>

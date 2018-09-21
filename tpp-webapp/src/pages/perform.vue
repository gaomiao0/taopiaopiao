<template>
    <div>

<per-header></per-header>
      <per-nav></per-nav>
    </div>
</template>

<script>
    import PerHeader from "../components/perform/PerHeader";
    import PerNav from "../components/perform/PerNav";


    export default {
        name: "home",
      components: {PerNav, PerHeader}
    }
</script>

<style scoped>

</style>

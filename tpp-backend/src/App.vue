<template>
  <div id="app">
    <router-view/>
    <TableNav v-show="$route.meta.showTable"></TableNav>
  </div>
</template>

<script>
import TableNav from "./components/TableNav";
export default {
  name: 'App',
  components: {TableNav}
}
</script>

<style>

</style>

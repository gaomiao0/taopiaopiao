<template>
  <div class="bigbox">
    <TableNav></TableNav>
  </div>
</template>

<script>
  import TableList from "../components/TableList";
  import TableNav from "../components/TableNav";
  export default {
    name: 'Tpptable',
    components: {TableNav, TableList},
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>

<style scoped>
  .bigbox{
    height: 100%;
  }
</style>

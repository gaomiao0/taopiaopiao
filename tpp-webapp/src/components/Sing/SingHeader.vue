<template>
    <div class="Shead">
      <p><i class="iconfont icon-arrow-right-copy"></i><span>详情</span><i></i></p>
    </div>
</template>

<script>
    export default {
        name: "SingHeader"
    }
</script>

<style scoped>
.Shead{
  width: 100%;
  height: 1.3rem;
  background: white;
  position: fixed;
  z-index: 100;
  border-bottom: 0.01rem solid #ccc;

}
.Shead p{
    font-size: 0.5rem;
    color: #000;
  display: flex;
  align-items: center;
  height: 1.2rem;
justify-content: space-between;
  padding: 0 0.3rem;
  }
.Shead p i{
  font-size: 0.5rem;

}

</style>

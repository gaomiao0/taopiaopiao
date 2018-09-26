<template>
    <div class="sec">
      <span>介绍</span>
      <p>{{sec3.sec65}}</p>
      <a>更多图文详情<i class="iconfont icon-jiantou"></i></a>
    </div>
</template>

<script>
    export default {
        name: "SingSec",
      data(){
        return{
          sec3:{}
        }
      },
      methods:{
        getjsons(id){
          this.$http.get("http://localhost:3000/perform/"+id)
            .then((response)=> {
              this.sec3 = response.data
            })
        },
      },
      created(){
        this.getjsons(this.$route.params.id);
      }

    }
</script>

<style scoped>
.sec{
  /*height: 5rem;*/
  background: white;
  margin: 0.5rem 0;
  padding: 0 0.3rem;
  border-bottom: 0.01rem solid #ccc;
  border-top: 0.01rem solid #ccc;
}
  .sec span{
font-size: 0.4rem;
    font-weight: 600;
    line-height: 1rem;
  }
  .sec p{
    line-height: 1rem;
    color: #636563;
    font-size: 0.35rem;

    padding-bottom: 0.3rem;
  }
  .sec a{
    border-top: 0.01rem solid #ccc;
    display: block;
    line-height: 1.5rem;
    text-align: center;
    color: #ff106b;
    font-size: 0.35rem;
  }
  .sec a i{
    font-size: 0.4rem;
    margin-left: 0.1rem;
  }
</style>

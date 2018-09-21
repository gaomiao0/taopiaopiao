<template>
<div class="sec">
  <div class="seca" v-for="i in secc">
    <img :src=i.secpic>
    <div class="secdiv">
      <p class="secp1">{{i.sec1}}</p>
      <a class="seca1"><span>{{i.sec2}}</span>|<span>{{i.sec3}}</span></a>
      <p class="secp2"><span>{{i.sec4}}</span>-<span>{{i.sec5}}</span>元</p>
      <p class="secp3">{{i.sec65}}</p>
    </div>
  </div>

</div>
</template>

<script>
    export default {
        name: "PerSec",
        data(){
          return{
            secc:[]
          }

              },
        methods:{
          getjsons(){
            this.$http.get("http://localhost:3000/perform")
              .then((response)=> {
                this.secc = response.data.secc
              })
          },
        },
      created(){
        this.getjsons();
      }
    }
</script>

<style scoped>
.sec{
  height: 30rem;
  /*background: pink;*/
  font-size: 0.5rem;
  /*padding: 0 0.4rem;*/
}
  .seca{
    padding: 0.3rem 0.4rem;
    display: flex;
    border-bottom: 0.01rem solid #ccc;
  }
  .seca img{
    width: 2rem;
    height: 2.5rem;
    margin-right: 0.2rem;
  }
  .secdiv{
    width: 78%;
    text-align: left;
    font-size: 0.35rem;
    /*padding-right: 0.4rem;*/
  }
  .secdiv .secp1{
    /*font-size: 0.35rem;*/
    color: #000;
    line-height: 0.6rem;

  }
  .seca1{
    color: #848284;
    line-height: 0.6rem;
  }
  .secp2{
    color: #848284;
    line-height: 0.7rem;
    border-bottom: 0.01rem solid #ccc;
  }
  .secp2 span{
    font-size: 0.38rem;
    color: #ff4d63;
    font-weight: 600;
  }
  .secp3{
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 0.8rem;
    color: #848284;
  }
</style>

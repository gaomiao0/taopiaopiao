<template>
  <div class="bbg">
    <div class="bg">
      <div class="drag">
        <img :src=sec1.secpic>

      </div>
      <div class="drag1">
        <p>{{sec1.sec1}}</p>

        <span>咸阳</span>
        <a><span>{{sec1.sec4}}</span>-<span>{{sec1.sec5}}</span>元</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Singbg",
      data(){
          return{
            sec1:{}
          }
      },
        methods:{
          getjsons(){
            this.$http.get("http://localhost:3000/secc/1")
              .then((response)=> {
                this.sec1 = response.data
                console.log(response.data)
              })
          },
        },
        created(){
          this.getjsons();
        }
    }
</script>

<style scoped>
.bbg{
  /*margin-top: 1.3rem;*/
  height: 5.2rem;
  background: white;
  position: relative;
  top:1.3rem;
  border-bottom: 0.01rem solid #ccc;
}
.bg{
 /*top:1.3rem;*/
  width:100%;
  height:4rem;
  position: relative;
  background: url("../../../static/img/hb1.png") no-repeat top right;
  box-sizing:border-box;
  z-index:1;
  background-size: 20rem 20rem;
}
.bg:after{
  content: "";
  width:100%;
  height:100%;
  position: absolute;
  left:0;
  top:0;
  background: inherit;
  filter: blur(0.05rem);
  z-index: 2;
}
.drag{
  position: absolute;
  left:0.6rem;
  top:1.2rem;
  text-align: center;
  z-index:11;
}
.drag img{
  width:2.5rem;
  height:3.5rem;
}
.drag1{
  position: absolute;
  left:3.5rem;
  top:1.2rem;
  text-align: left;
  color: white;
  line-height: 0.6rem;
  font-size: 0.4rem;
  z-index:11;
  padding-right: 0.5rem;
}
.drag1 a{
  display: block;
  margin-top: 1.1rem;
}
.drag1 a span{
  color: #ff106b;
  font-size: 0.45rem;
}
.drag1 a{
  color: #9c9a9c;
  font-size: 0.3rem;
  /*margin-bottom: 0.5rem;*/
}
</style>

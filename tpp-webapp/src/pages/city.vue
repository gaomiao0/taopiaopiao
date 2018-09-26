<template>
    <div>
      <div class="header">
        <span><i class="iconfont icon-arrow-right-copy"></i></span>
        <span>选择城市</span>
      </div>
      <div class="secth">
        <span><i class="iconfont icon-sousuo"></i> </span>
        <input type="text" placeholder="输入城市中文名" v-model="filterInput">
      </div>
      <div class="section" v-for="city in citys">
        <span class="section_header">{{city.title}}</span>
        <span class="section_section"  v-for="ct in filterBy(city.city,filterInput)">{{ct}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
        	return{
            citys:[],
            filterInput:""
        	}
        },
        methods:{
        getjson(){
          this.$http.get("http://localhost:3000/city")
            .then((response)=> {
              this.citys = response.data
              console.log(this.citys)
            })
        },
          filterBy(cityes,value){
            return cityes.filter(function (citye) {
              return citye.match(value);
            })
          }
      },
        created(){
        this.getjson()
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  c(p)
    (p/75)rem
	.header
    height c(50)
    padding c(27) c(42)
    background #dd403b
    color #ffffff
    font-size c(35)
    display flex
    align-items center
    i
      font-size c(37)
    span:nth-of-type(2)
      vertical-align middle
      margin-left c(42)
      padding-left c(35)
      border-left 1px solid #b7302d
  .secth
    padding c(30)
    box-sizing border-box
    display flex
    border-bottom 2px solid #e5e5e5
    i
    font-size c(20)
    input
      height c(42)
      margin-left c(20)
  .section
    display flex
    flex-direction column
    .section_header
      padding c(37) 0 c(13) c(28)
      background #f5f5f5
      color #868686
      font-size c(28)
      font-weight 800
      border-bottom 2px solid #e8e8e8
    .section_section
      padding c(40) 0 c(36)  c(28)
      color #000000
      font-weight 800
      border-bottom 2px solid #e8e8e8
</style>

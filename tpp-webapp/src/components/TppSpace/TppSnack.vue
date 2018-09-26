<template>
  <div class="popcorn">
    <h3>影院超值小食</h3>
    <div class="popsnack">
      <p>
        <a href="javascript:;">
          <img src="../../assets/img/d-77.jpg" />
          <span>热销</span>
        </a>
        <span class="snacktit">
          <span>
            <i>单人</i>64oz爆米花*1+22oz可乐/泉水叮咚矿泉水*1
          </span>
          <span class="price">
            <em>25.3元</em>
            <u>30元</u>
          </span>
        </span>
      </p>
      <a class="bought" href="javascript:;">购买</a>
    </div>
    <div class="popsnack">
      <p>
        <a href="javascript:;">
          <img src="../../assets/img/d-77.jpg" />
          <span>热销</span>
        </a>
        <span class="snacktit">
          <span>
            <i>单人</i>64oz爆米花*1+22oz可乐/泉水叮咚矿泉水*1
          </span>
          <span class="price">
            <em>25.3元</em>
            <u>30元</u>
          </span>
        </span>
      </p>
      <a class="bought" href="javascript:;">购买</a>
    </div>
    <div class="popsnack">
      <p>
        <a href="javascript:;">
          <img src="../../assets/img/d-77.jpg" />
          <span>热销</span>
        </a>
        <span class="snacktit">
          <span>
            <i>单人</i>64oz爆米花*1+22oz可乐/泉水叮咚矿泉水*1
          </span>
          <span class="price">
            <em>25.3元</em>
            <u>30元</u>
          </span>
        </span>
      </p>
      <a class="bought" href="javascript:;">购买</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TppSnack"
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  c(k){
    (k/75)rem
  }
  .popcorn{
    padding 0 c(26)
  }
  h3{
    font-size c(26)
    color #000
    padding-top c(34)
    text-align left
  }
  .popsnack{
    padding c(36) 0
    display flex
    justify-content space-between
    align-items center
    border-bottom 1px solid #efefef
    p{
      display flex
      a{
        display block
        position relative
        img{
          width c(145)
          height c(145)
          display inline-block
        }
        span{
          position absolute
          top 0
          left 0
          font-size c(20)
          color #fff
          background-color #fea44a
          padding c(4) c(8)
        }
      }
    }
  }
  .bought{
    font-size c(22)
    color #ff425a
    padding c(6) c(22)
    border-radius c(24)
    border 1px solid #ff425a
  }
  .snacktit{
    display flex
    flex-direction column
    justify-content space-between
    text-align left
    margin-left c(20)
    span{
      display inline-block
      width c(380)
      color #000
      line-height c(40)
      i{
        font-size c(20)
        color #fea246
        border 1px solid #fea246
        border-radius c(6)
        padding 0 c(6)
      }
    }
  }
  .price{
    em{
      font-size c(26)
      color #ff3c55
    }
    u{
      color #b0b0b0
      text-decoration line-through
    }
  }
</style>

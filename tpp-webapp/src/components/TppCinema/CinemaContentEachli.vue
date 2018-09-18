<template>
    <li class="cinemas">
      <a href="javascript:;">
        <h2>
          <span>西安博纳国际影城（朱雀店）</span>
          <span class="price"><b><i>29</i>元</b> 起</span>
        </h2>
        <p>雁塔区小寨西路银泰城六层</p>
        <ol>
          <li class="active_li">影城卡</li>
          <li>退票</li>
          <li>改签</li>
          <li>观影小吃</li>
          <li>4DX厅</li>
          <!--<li>IMAX厅</li>-->
          <li>可停车</li>
          <li>艺术影厅</li>
        </ol>
        <ul class="youhui">
          <li><span>促</span>淘票票特惠促销</li>
          <li><span class="active_span">卡</span>开卡首单，最高立减12元</li>
          <li><span>食</span>小食限量8.8元起</li>
        </ul>
        <div class="recent">近期场次:<span>10:40|11:50|13.30|14.40|16:20|18:10</span></div>
      </a>
    </li>
</template>

<script>
    export default {
        name: "CinemaContentEachli"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  c(k){
    (k/75)rem
  }
.cinemas{
  padding-top c(37)
  box-sizing border-box
  border-bottom 2px solid #f4f4f4
  a:link{text-decoration: none!important;  }
  a:visited{text-decoration: none!important;  }
  a:hover{text-decoration: none!important;  }
  a:active{text-decoration: none!important;  }
  a:focus{text-decoration: none!important;  }
  a{
    display flex
    flex-direction column
    width 100%
    h2{
      font-size c(33)
      color #000000
      display flex
      width 100%
      justify-content space-between
      .price{
        font-size c(21)
        color #9f9d9f
        b{
          color #ff3c56
          i{
            font-size c(26)
          }
        }
      }
      
    }
    p{
      font-size c(26)
      color #666866
      width 100%
      line-height c(76)
    }
    ol{
      display flex
      li{
        padding c(4) c(8)
        margin-right c(8)
        border-radius 5px
        border 1px solid #5caff2
        font-size c(22)
        color #5caff2

      }
      .active_li{
        color #ffffff
        background #73cb7b
      }
    }
    .youhui{
      width 100%
      padding 0
      margin-top c(16)
      li{
        line-height c(54)
        font-size c(26)
        color #939293
        letter-spacing 1px
        span{
          font-size c(22)
          color #ffffff
          border-radius 5px
          background #ffa64a
          padding c(5)
          padding-top c(2)
          margin-right c(9)
        }
        .active_span{
          background #73cb7b
        }
      }
    }
    .recent{
      font-size c(27)
      color #666866
      width 76%
      line-height c(66)
      margin-bottom c(16)
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
    }
  }
}
</style>

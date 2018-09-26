<template>
    <li class="cinemas">
      <router-link to="/space">
        <h2>
          <span>{{cn.name}}</span>
          <span class="price"><b><i>{{cn.price}}</i>元</b> 起</span>
        </h2>
        <p>{{cn.address}}</p>
        <ol>
          <li v-for="m in cn.tips" :key="m.id">{{m}}</li>
        </ol>
        <ul class="youhui">
          <li v-for="(v,index) in cn.youhui"><span :style="{background:v.color}">{{v.type}}</span>{{v.content}}</li>
        </ul>
        <div class="recent">近期场次:<span>{{cn.changci}}</span></div>
      </router-link>
    </li>
</template>

<script>
  export default {
    name: "CinemaContentEachli",
    props: ["cn"]
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  c(k) {
    (k / 75) rem
  }

  .cinemas {
    padding-top c(37)
    box-sizing border-box
    border-bottom 2px solid #f4f4f4
    a:link {
      text-decoration: none !important;
    }
    a:visited {
      text-decoration: none !important;
    }
    a:hover {
      text-decoration: none !important;
    }
    a:active {
      text-decoration: none !important;
    }
    a:focus {
      text-decoration: none !important;
    }
    a {
      display flex
      flex-direction column
      width 100%
      h2 {
        font-size c(33)
        color #000000
        display flex
        width 100%
        justify-content space-between
        .price {
          font-size c(21)
          color #9f9d9f
          b {
            color #ff3c56
            i {
              font-size c(26)
            }
          }
        }

      }
      p {
        font-size c(26)
        color #666866
        width 100%
        line-height c(76)
        width 80%
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
      }
      ol {
        display flex
        li {
          padding c(4) c(8)
          margin-right c(8)
          border-radius 5px
          border 1px solid #5caff2
          font-size c(22)
          color #5caff2

        }
        li:first-child {
          color #ffffff
          background #73cb7b
        }
      }
      .youhui {
        width 100%
        padding 0
        margin-top c(16)
        li {
          line-height c(54)
          font-size c(26)
          color #939293
          letter-spacing 1px
          span {
            font-size c(22)
            color #ffffff
            border-radius 5px
            background #ffa64a
            padding c(5)
            padding-top c(2)
            margin-right c(9)
          }
          .active_span {
            background #73cb7b
          }
        }
      }
      .recent {
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

import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Movie from '../pages/movie'
import MyTq from '../pages/mytq'
import Perform from '../pages/perform'
import TQVideo from '../pages/tqvideo'
import ShopCar from '../pages/ShopCar'
import Cinema from '../pages/cinema'
import Map from '../pages/map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/movie',
      component: Movie,
      meta:{
        showFooter :true
      }
    },
    {
      path:'/home',
      component: Home,
      meta:{
        showFooter :true
      }
    },
    {
      path:'/mytp',
      component: MyTq,
      meta:{
        showFooter :true
      }
    },
    {
      path:'/perform',
      component: Perform,
      meta:{
        showFooter :true
      }
    },
    {
      path:'/tqvideo',
      component: TQVideo,
      meta:{
        showFooter :true
      }
    },
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/ShopCar',
      component: ShopCar,
      meta:{
        showFooter :false
      }
    },
    {
      path:'/cinema',
      component: Cinema,
      meta:{
        showFooter :false
      }
    },
    {
      path:'/map',
      component: Map,
      meta:{
        showFooter :false
      }
    }

  ]
})

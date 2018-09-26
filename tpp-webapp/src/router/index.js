import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Movie from '../pages/movie'
import MyTq from '../pages/mytq'
import Perform from '../pages/perform'
import TQVideo from '../pages/tqvideo'
import ShopCar from '../pages/ShopCar'
import Cinema from '../pages/cinema'
import CinemaMap from '../pages/CinemaMap'
import Detall from '../pages/detall'
import Space from '../pages/space'
import ChooseSeat from "../pages/chooseSeat"
import Sing from '../pages/Sing'
import TqvDetail from '../pages/TQVDetail'
import city from "../pages/city"

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
      path:'/city',
      component: city,
      meta:{
        showFooter :false
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
      path:'/cinema/:id',
      component: Cinema,
      meta:{
        showFooter :false
      }
    },
    {
      path:'/CinemaMap',
      component: CinemaMap,
      meta:{
        showFooter :false
      }
    },
    {
      path:'/detail/:id',
      component: Detall,
      meta:{
        showFooter :false
      }
    },
    {
      path:'/space/',
      component: Space,
      meta:{
        showFooter :false
      }
    },
    {
      path:'/chooseseat',
      component: ChooseSeat,
      meta:{
        showFooter :false
      }
    },
    {
      path:'/Sing/:id',
      component: Sing,
      meta:{
        showFooter :false
      }
    },
    {
      path:'/TqvDetail',
      component: TqvDetail,
      meta:{
        showFooter :false
      }
    }
  ]
})

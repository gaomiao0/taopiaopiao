/*
入口js
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import $ from 'jquery'
import animate from "animate.css"
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload,{
  preLoad: 1.3,
  loading: '../static/img/timg.gif',
  attempt: 1,
  listenEvents: [ 'scroll' ]
});

Vue.use(MintUI);

Vue.config.productionTip = false

Vue.prototype.$http = axios

new Vue({
  el:"#app",
  render: h => h(App),
  router,//使用上vue-router
})

/*
入口js
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false

Vue.prototype.$http = axios

new Vue({
  el:"#app",
  render: h => h(App),
  router,//使用上vue-router
})

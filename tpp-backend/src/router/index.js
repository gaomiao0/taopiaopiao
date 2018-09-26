import Vue from 'vue'
import Router from 'vue-router'
import Tpptable from '../pages/Tpptable'
import TableList from '../components/TableList'
import TableNew from '../components/TableNew'
import TableEdit from '../components/TableEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/TableList'
    },
    {
      path: '/TableList',
      name: 'TableList',
      component: TableList,
      meta:{
        showTable:true
      }
    },
    {
      path: '/TableEdit/:id',
      name: 'TableEdit',
      component: TableEdit,
      meta:{
        showTable:true
      }
    },
    {
      path: '/TableNew',
      name: 'TableNew',
      component: TableNew,
      meta:{
        showTable:true
      }
    }
  ]
})

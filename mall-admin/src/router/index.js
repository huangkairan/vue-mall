import Vue from 'vue'
import VueRouter from 'vue-router'
import GoodsList from '../views/GoodsList.vue'
import CreateGoods from '../views/CreateGoods.vue'
import Profile from '../views/Profile'
import Login from '../views/Login'
import Home from '../views/Home'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path:'/home',
    name:'',
    component:Home,
    children:[{
      path:'/goods',
      component:GoodsList,
      meta:['商品列表']
    },{
      path:'/create',
      component:CreateGoods,
      meta:['添加商品']
    },{
      path:'/profile',
      component:Profile,
      meta:['个人信息']
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

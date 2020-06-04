import Vue from 'vue'
import VueRouter from 'vue-router'
import GoodsList from '../views/GoodsList.vue'
import CreateGoods from '../views/CreateGoods.vue'
import Profile from '../views/Profile'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    redirect : '/goods/index'
  },
  {
    path: '/goods/index',
    name: 'list-goods',
    component: GoodsList
  },
  {
    path: '/goods/create',
    name: 'create-goods',
    component: CreateGoods
  },
  {
    path: '/goods/profile',
    name: 'profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

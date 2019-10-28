import Vue from 'vue'
import VueRouter from 'vue-router'
import childrenViews from './main'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=> import(/**主体内容导航 */'../views/index.vue'),
    childrens:{
    }
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

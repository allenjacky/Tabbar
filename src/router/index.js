import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../views/home/home'
import Category from '../views/category/category'
import Cart from '../views/cart/cart'
import Profile from '../views/profile/profile'
const routes =[
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/profile',
        component:Profile
    },
]
const router = new VueRouter({
    routes,
    mode:'history'
})
export default router
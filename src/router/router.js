// 路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
Vue.use(VueRouter)
export default new VueRouter ({
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:Home,
            meta:{
                showFooterGuild:true
            }
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                showFooterGuild:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                showFooterGuild:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                showFooterGuild:true
            }
        },
        {
            path:'/shop',
            component:Shop,
            children:[
                {
                    path:'/shop/info',
                    component:ShopInfo,
                },
                {
                    path:'/shop/ratings',
                    component:ShopRatings,
                },
                {
                    path:'/shop/goods',
                    component:ShopGoods,
                    
                },
                {
                    path:'',
                    redirect:'/shop/goods'
                },
            ]
        },
    ]
})
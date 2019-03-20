// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入路由器
import router from './router/router.js'
import store from './store'
import {Button} from 'mint-ui'
import './mock/mockSever'
// Vue.config.productionTip = false
//注册全局组件标签
Vue.component(Button.name, Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },1.0的写法
  render:h=>h(App),
  // template: '<App/>'
  router,//用上vue-router 
  store//用上vuex
})

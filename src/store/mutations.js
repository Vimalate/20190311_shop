import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORY,
  RECEIVE_SHOPS,
  RECEIVE_USERINFO,
  RECEIVE_LOGOUT,
  RECEIVE_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  ADD_COUNT,
  DECREASE_COUNT

} from "./mutations-types";
import Vue from 'vue'
// 直接更新state的多个方法的对象

export default {
  [RECEIVE_ADDRESS](state, {
    address
  }) {
    state.address = address
  },
  [RECEIVE_CATEGORY](state, {
    category
  }) {
    state.category = category
  },
  [RECEIVE_SHOPS](state, {
    shops
  }) {
    state.shops = shops
  },
  [RECEIVE_USERINFO](state, {
    userInfo
  }) {
    state.userInfo = userInfo
  },
  [RECEIVE_LOGOUT](state) {
    state.userInfo = {}
  },
  [RECEIVE_INFO](state, {
    info
  }) {
    state.info = info
  },
  [RECEIVE_RATINGS](state, {
    ratings
  }) {
    state.ratings = ratings
  },
  [RECEIVE_GOODS](state, {
    goods
  }) {
    state.goods = goods
  },
  [ADD_COUNT](state, {
    food
  }) {
    if(!food.count){
      // food.count=1
      Vue.set(food,'count',1)//让新增的属性也有数据绑定
    }else{
      food.count++
    }
  },
  [DECREASE_COUNT](state, {
    food
  }) {
    if(food.count){
      food.count--
    }
  },
}

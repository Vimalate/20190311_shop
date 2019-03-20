// 通过mutations间接更新state的多个方法的对象
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORY,
  RECEIVE_SHOPS,
  RECEIVE_USERINFO,
  RECEIVE_LOGOUT,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  ADD_COUNT,
  DECREASE_COUNT
} from "./mutations-types";
import {
  reqAddress,
  reqFoodCategory,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopInfo,
  reqShopGoods,
  reqShopRatings
} from '../api'
export default {
  //异步获取地址
  async getAddress({
    commit,
    state
  }) {
    //发送ajax请求 
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    //提交一个mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {
        address
      })
    }

  },
  //异步获取食品分类列表
  async getCategory({
    commit
  }) {
    const result = await reqFoodCategory()
    if (result.code === 0) {
      const category = result.data
      commit(RECEIVE_CATEGORY, {
        category
      })
    }
  },
  //异步获取商铺
  async getShops({
    commit,
    state
  }) {
    const result = await reqShops(state.longitude, state.latitude)
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {
        shops
      })
    }
  },
  //同步获取用户信息
  save({
    commit
  }, userInfo) {
    commit(RECEIVE_USERINFO, {
      userInfo
    })
  },
  //一步获取登录信息
  async getUserInfo({
    commit
  }) {
    const result = await reqUserInfo()
    if (result.code === 0) {
        console.log('ok')
      const userInfo = result.data
      commit(RECEIVE_USERINFO, {
        userInfo
      })
    }

  },
  //异步登出
  async logout({commit}){
    const result=await reqLogout()
    if (result.code === 0) {
      // console.log('ok')
    
    commit(RECEIVE_LOGOUT)
  }
  },
// 异步获取商家信息
  async getShopInfo({commit}){
    const result=await reqShopInfo()
    if(result.code===0){
      const info =result.data
      commit(RECEIVE_INFO,{info})
    }
  },
  async getShopRatings({commit}){
    const result=await reqShopRatings()
    if(result.code===0){
      const ratings =result.data
      commit(RECEIVE_RATINGS,{ratings})
    }
  },
  async getShopGoods({commit},callback){
    const result=await reqShopGoods()
    if(result.code===0){
      const goods =result.data
      commit(RECEIVE_GOODS,{goods})
      callback&callback()
    }
  },

  //
  updateFoodCount({commit},{food,isAdd}){
    if(isAdd){
      commit(ADD_COUNT,{food})
    }else{
      commit(DECREASE_COUNT,{food})
    }
  }

}

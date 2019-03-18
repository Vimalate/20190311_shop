// 通过mutations间接更新state的多个方法的对象
import { RECEIVE_ADDRESS,RECEIVE_CATEGORY,RECEIVE_SHOPS,rec } from "./mutations-types";
import {reqAddress,reqFoodCategory,reqShops} from '../api'
export default{
    //异步获取地址
   async getAddress({commit,state}){
       //发送ajax请求 
        const geohash=state.latitude+','+state.longitude
        const result= await reqAddress(geohash)
        //提交一个mutation
        if(result.code===0){
            const address=result.data
            commit(RECEIVE_ADDRESS,{address})
        }
        
    },
    //异步获取食品分类列表
    async getCategory({commit}){
        const result=await reqFoodCategory()
        if(result.code===0){
            const category=result.data
            commit(RECEIVE_CATEGORY,{category})
        }
    },
    //异步获取商铺
    async getShops({commit,state}){
        const result=await reqShops(state.longitude,state.latitude)
        if(result.code===0){
            const shops=result.data
            commit(RECEIVE_SHOPS,{shops})
        }
    }
}
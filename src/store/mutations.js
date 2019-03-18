import { RECEIVE_ADDRESS,RECEIVE_CATEGORY,RECEIVE_SHOPS,rec } from "./mutations-types";

// 直接更新state的多个方法的对象

export default{
    [RECEIVE_ADDRESS](state,{address}){
        state.address=address
    },
    [RECEIVE_CATEGORY](state,{category}){
        state.category=category
    },
    [RECEIVE_SHOPS](state,{shops}){
        state.shops=shops
    }
}
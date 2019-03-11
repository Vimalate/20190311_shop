// 包含多个请求函数的模块
import ajax from './ajax'


//1 根据经纬度获取位置
export const reqAddress=(geohash)=>ajax(`/position/${geohash}`)
//2 获取食品分类列表
export const reqFoodType=()=>ajax('/index_category')

//3 根据经纬度获取商铺
export const reqShops=(longitude,latitude)=>ajax('/shops',{longitude,latitude})

//4根据经纬度和关键字获取商铺列表

//获取一次性验证码

//6 用户密码登录

//7发送短信验证码

//8手机验证登录

//9 根据会话获取用户信息

//10 退出登录
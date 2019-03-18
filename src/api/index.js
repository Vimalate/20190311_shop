// 包含多个请求函数的模块
import ajax from './ajax'
const BASE_URL='/api'

//1 根据经纬度获取位置
export const reqAddress=(geohash)=>ajax(`${BASE_URL}/position/${geohash}`)
//2 获取食品分类列表
export const reqFoodCategory=()=>ajax(BASE_URL+'/index_category')

//3 根据经纬度获取商铺
export const reqShops=(longitude,latitude)=>ajax(BASE_URL+'/shops',{longitude,latitude})

//4根据经纬度和关键字获取商铺列表
export const reqSearchShops=(geohash,keyword)=>ajax(BASE_URL+'/search_shops',(geohash,keyword))

//6 用户密码登录
export const reqLoginPwd=({name,pwd,captcha})=>ajax(BASE_URL+'/login_pwd',{name,pwd,captcha},'post')
//7发送短信验证码
export const reqSendCode=(phone)=>ajax(BASE_URL+'/sendcode',(phone))
//8手机验证登录
export const reqLoginSms=(phone,code)=>ajax(BASE_URL+'/login_sms',(phone,code),'post')
//9 根据会话获取用户信息
export const reqUserInfo=()=>ajax(BASE_URL+'/userinfo')
//10 退出登录
export const reqLogout=()=>ajax(BASE_URL+'/logout')
/*
 * @Author: shiyuanyuan
 * @Date: 2020-04-27 14:39:54
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-04-27 15:02:11
 * @Description: 
 */

 import axios from 'axios';

 //新建
 const instance = axios.create();

// 请求前添加拦截器
instance.interceptors.request.use(config => {
  // 对config做一些什么
  // 给接口统一添加token
  // set token
  // config.headers['Authorization'] = ``
  return config
}, error => {
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(response => {
  const { code, msg} = response.data
  switch (code){
    case '0':
      break;
    case 200:
      break;
    case 401:
      // TODO 提示重新登录,并重置页面到登录界面
      break;
    case 403:
      // TODO 提示无权限
      break;
    default:
      // TODO 提示错误信息
  }
},error => {
  return Promise.reject(error.response.data)
})

export const post = (url, params, config = {
  headers: {
    'Content-Type': 'application/json',
  }
}) => {
  return instance.post(url, params, config)
}

export const get =  (url, params, config = {
  headers: {
    'Content-Type': 'application/json',
  }
}) => {
  return instance.get(url, params, config)
}

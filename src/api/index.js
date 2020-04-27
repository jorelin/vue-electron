/*
 * @Author: shiyuanyuan
 * @Date: 2020-04-27 15:02:52
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-04-27 15:07:53
 * @Description: 
 */

import { get, post } from './axios';

//接口地址
const baseUrl = 'http://xue.offcn.com/policeManagement/';

// login
export const login = (params) => get(`${baseUrl}auth/login`, { ...params })
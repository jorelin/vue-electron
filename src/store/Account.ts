/*
 * @Author: shiyuanyuan
 * @Date: 2020-04-27 15:08:43
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-04-27 18:20:50
 * @Description: 
 */
import { AuthState } from './types/interfaceState';

const state: AuthState = {
  name: 'hello',
  total: 0,
  isLogin: false,
  postList: [],
  userInfo:{
    name:'',
    pwd:10,
  }
};

const Account = {
  state: state,
  mutations: {
    ['Account/SAVE_USERINFO'](state: AuthState, { payload }: any){
      state.userInfo = Object.assign({},{...state.userInfo},{...payload})
    },
  },
  actions:{

  },
}

export default Account;
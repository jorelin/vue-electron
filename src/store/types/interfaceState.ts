/*
 * @Author: shiyuanyuan
 * @Date: 2020-04-27 18:10:27
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-04-27 18:10:27
 * @Description: 
 */
interface AuthState {
  name: string;
  total: number;
  isLogin: boolean;
  postList: object[];
  userInfo:{
    name?: string,
    pwd?: number,
  },
}

export { AuthState }
/*
 * @Author: shiyuanyuan
 * @Date: 2020-04-07 20:55:15
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-04-10 15:09:55
 * @Description:  views文件夹下的ts声明,定义一些接口、类、常量
 */

// 变量
const myKey = 100;

// 接口,定义一些公共的变量接口
interface PropData {
  name?: string; //可选参数
  msg?: string;
  key: number;
}
// 公用函数
const func: (x: number, y: number) => number = function(x, y) {
  return x + y;
};

//cloneShadow
const cloneShadow: <T>(x: T, y: T) => T = function(x, y) {
  return Object.assign({}, { ...x }, { ...y });
};

export { myKey, PropData, func, cloneShadow };

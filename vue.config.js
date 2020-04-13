/*
 * @Author: shiyuanyuan
 * @Date: 2020-04-02 18:22:28
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-04-13 16:54:06
 * @Description: webpack配置
 */

module.exports = {
  lintOnSave: false, // 暂时关闭eslint检查
  devServer: {
    //   proxy: 'http://localhost:4000', //指向开发环境 API 服务器，设置服务器api地址
    port: 8888, //端口
    compress: true //对所有服务启用gzip压缩
  },
  css: {
    loaderOptions: {
      less: { //antd定制颜色
        modifyVars: {
          'primary-color': '#1DA57A',
          'link-color': '#1DA57A',
          'border-radius-base': '2px',
        },
        javascriptEnabled: true,
      },
    },
  },
  publicPath: "/",//桌面端生成html文件的路径需要更改
};

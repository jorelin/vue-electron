/*
 * @Author: shiyuanyuan
 * @Date: 2020-04-13 14:22:30
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-04-13 14:31:46
 * @Description: 设置窗口菜单
 */

import { app } from "electron";
const isMac = process.platform === 'darwin'

const templateMenu: any[] = [
    // { role: 'appMenu' }
    ...(isMac ? [{
      label: app.name,
      submenu: [
        { role: 'about',label:'关于'},
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideothers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit',label:'退出' }
      ]
    }] : []),
    // { role: 'fileMenu' }
    {
      label: '文件',
      submenu: [
        isMac ? { role: 'close',label:'关闭窗口' } : { role: 'quit',label:'关闭窗口' }
      ]
    },
    // { role: 'editMenu' }
    // 暂时不需要编辑菜单
    // {
    //   label: '编辑',
    //   submenu: [
    //     { role: 'undo' },
    //     { role: 'redo' },
    //     { type: 'separator' },
    //     { role: 'cut' },
    //     { role: 'copy' },
    //     { role: 'paste' },
    //     ...(isMac ? [
    //       { role: 'pasteAndMatchStyle' },
    //       { role: 'delete' },
    //       { role: 'selectAll' },
    //       { type: 'separator' },
    //       {
    //         label: 'Speech',
    //         submenu: [
    //           { role: 'startspeaking' },
    //           { role: 'stopspeaking' }
    //         ]
    //       }
    //     ] : [
    //       { role: 'delete' },
    //       { type: 'separator' },
    //       { role: 'selectAll' }
    //     ])
    //   ]
    // },
    // { role: 'viewMenu' }
    {
      label: '查看',
      submenu: [
        { role: 'reload',label:'重新加载' },
        { role: 'forcereload',label:'强制重新加载' },
        { role: 'toggledevtools',label:'切换开发者工具'},
        { type: 'separator' },
        { role: 'resetzoom' },
        { role: 'zoomin' },
        { role: 'zoomout' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    // { role: 'windowMenu' }
    {
      label: '窗口',
      submenu: [
        { role: 'minimize',label:'最小化' },
        { role: 'zoom',label:'缩放'},
        ...(isMac ? [
          { type: 'separator' },
          { role: 'front' },
          { type: 'separator' },
          { role: 'window' }
        ] : [
          { role: 'close' }
        ])
      ]
    },
    {
      label: '帮助',
      submenu: [
        {
          label: 'Learn More',
          click: async () => {
            const { shell } = require('electron')
            await shell.openExternal('https://electronjs.org')
          }
        }
      ]
    }
  ]

  export default templateMenu
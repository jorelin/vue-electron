# vue-init

## Project setup
```
npm install
```

### Compiles and hot-reloads for development 
```
npm run electron:serve
```

### Compiles and minifies for production
```
npm run electron:build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 查看vue-cli-service配置

vue-cli-service是webpack和node的一些配置
路径：node_modules/@vue/cli-service/lib/Service.js

因为 @vue/cli-service 对 webpack 配置进行了抽象，所以理解配置中包含的东西会比较困难，尤其是当你打算自行对其调整的时候。

vue-cli-service 暴露了 inspect 命令用于审查解析好的 webpack 配置。那个全局的 vue 可执行程序同样提供了 inspect 命令，这个命令只是简单的把 vue-cli-service inspect 代理到了你的项目中。

该命令会将解析出来的 webpack 配置、包括链式访问规则和插件的提示打印到 stdout。

```
    vue inspect > output.js

```

### 添加、修改webpack配置

在根目录下添加vue-config.js，这个文件会被vue-cli-service自动加载


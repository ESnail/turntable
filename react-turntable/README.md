# react项目 - 转盘抽奖

1. 借助`create-react-app`脚手架搭建环境
2. 采用`lib-flexible`、`px2rem-loader`适配移动端
3. 采用`sass`、`react-transition-group`编写 css 及实现进场及出场动画

## 移动端适配
1.采用`lib-flexible`、`px2rem-loader`进行适配
2.在`create-react-app`初始化项目脚手架后，运行`yarn eject`将 webpack 配置暴露出来，然后安装依赖`lib-flexible`、`px2rem-loader`
3.安装依赖后，在`config/webpack.config.dev.js`和`config/webpack.config.build.js`中进行配置，`px2rem-loader`是新增的配置，需要放在`css-loader`与`postcss-loader`的中间
```
... // 省略
const loaders = [
  require.resolve('style-loader'),
  {
    loader: require.resolve('css-loader'),
    options: cssOptions,
  },
  {
    loader: require.resolve('px2rem-loader'),
    options: { remUnit: 75 } // 设计稿宽度 / 10
  },
  ... // 省略
}
```

## build 路径为相对地址
在  package.json 文件中加入`"homepage":"."`
```
{
  ... // 省略
  "babel": {
    "presets": [
      "react-app"
    ]
  },
  "homepage": "." // 新加入的，修复路径不对。会在路径前加homepage的值
}
```
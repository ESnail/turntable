# vue项目 - 转盘抽奖
1. 借助 vue 脚手架搭建环境
2. 采用 lib-flexible 、 px2rem-loader 适配移动端
3. 采用 sass 编写 css

## 移动端适配
1. 采用`lib-flexible`、`px2rem-loader`进行适配
2. 安装依赖后，在`build/utils.js`中进行配置
```
exports.cssLoaders = function (options) {
  ... // 省略

  // 新增
  const px2remLoader = {
    loader: 'px2rem-loader',
    options: {
      remUnit: 108 // 设计稿宽度 / 10
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader, px2remLoader] : [cssLoader, px2remLoader] // px2remLoader 为新增

    ... // 省略   
  }
}
```

## build 路径为相对路径
1.config/index.js
```
...
build: {
  // Template for index.html
  index: path.resolve(__dirname, '../dist/index.html'),

  // Paths
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsSubDirectory: 'static',
  assetsPublicPath: './', // 此处是更改地方
  ....
}
```
2.build/utils.js
```
...
if (options.extract) {
  return ExtractTextPlugin.extract({
    use: loaders,
    fallback: 'vue-style-loader',
    publicPath: '../../' // 此处是新增的地方
  })
} else {
  return ['vue-style-loader'].concat(loaders)
}
...
```
3.build/webpack.prod.conf.js
```
...
output: {
    publicPath: './', // 此处是新增的地方
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
},
...
```

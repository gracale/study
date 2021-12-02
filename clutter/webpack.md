# 学习webpack - 感受自动化的魅力

webpack，顾名思义。就是将web相关的文件打包的意思。<br>
它非常强大，能压缩代码，将高版本JS转译成低版本JS以适配不同环境。<br>

## 如何安装
直接去官网抄
https://webpack.js.org/guides/getting-started/

## 改变JS生成模式
https://webpack.js.org/configuration/mode/
```js
module.exports = {
  mode: 'development',//开发者模式
};
改成production就是用户模式
```

## 生成缓存
其输入和输出都可以在webpack.config.js配置
也是去官网抄
https://v4.webpack.js.org/guides/caching/

## 自定义行为
还可以在package.json里配置自定义指令
比如将build设定成
```json
  "scripts": {
    "build": "rm -rf dist && webpack",
  }
```
之后每次build文件时就可以先删除旧的再生成新的

## 生成HTML
官网抄
https://github.com/jantimon/html-webpack-plugin#options
在src/index.html下把tittle改成占位符
```html
<title><%= htmlWebpackPlugin.options.title %></title>
```
之后生成的标题就会随着webpack.config.js里的tittle走
至于其他的，你在html怎么改，它就怎么生成。

## 引入CSS
同上先去官网抄配置
https://v4.webpack.js.org/loaders/style-loader/
```
yarn add css-loader --dev
yarn add style-loader --dev
```
后面加dev是因为我们只需要用到客户功能

## webpack dev server
接着抄
https://webpack.js.org/guides/development/#using-webpack-dev-server

```
yarn add webpack-dev-server --dev
```

~~用不了妈的，以后再玩这功能~~

## css抽取
抄
https://v4.webpack.js.org/plugins/mini-css-extract-plugin/


---

与其说学习webpack，不如说是学习解决问题的思维模式，解决方法很简单就是抄。但想找到抄的地方也不容易，这种思想更为重要。

---

## 引入scss
接着抄
https://webpack.js.org/loaders/sass-loader/

官方推荐使用dart-sass
```
yarn add sass-loader dart-sass --dev
```

## 引入图片
继续抄
https://v4.webpack.js.org/loaders/file-loader/
```
yarn add file-loader --dev
```

## 懒加载
用import括号去加载这个文件，然后我会得到一个promise，promise的then前面会写成功之后做什么，后面写失败之后做什么。
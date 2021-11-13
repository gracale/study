## a的href的取值有9种
  * https协议,http协议,以及无协议的//,无协议优先选https,写链接时优先写//
  * id,用于跳转到指定标签href写#xxx,要跳转的标签id写xxx
```html
        <a href="#999">跳转</a>
        <p id="999">990</p>
```
  * 路径,绝对和想对路径均可.
  * 伪协议
    * javascript:代码.特殊用法:javascript:;使超链接点击后什么事都不会发生
    * mailto:邮箱
    * tel:手机号  面试时用来给面试官直接拨号给你
## a的target的取值
  * _blank 新窗口打开
  * _self 当前页面打开
  * _top 使用此值后,在里面可以引用一个iframe页面
  * _parent 在此页面的上一层iframe页面打开链接
  * id,打开一个唯一id的页面,若其它链接id与此id相同,则会在此页面替换链接,想查该页面的id可以通过浏览器Console输入
```
    window.name
```
## iframe 在当前窗口创建一个嵌入式页面
## table 只有三个标签
  * thead
  * tbody
  * tfoot
  * * 这三个标签里面可以有th(table head组成一行),tr(table row能组成一列),td(table date加粗效果)
  * table-layout:样式,auto根据内容调整宽度,fixed尽量平均宽度
  * border-collapse:使得格子之间没有缝隙
  * border-spacing:0也能达到同样效果。此值代表各格间距
## img
  * src即图片地址
  * alt是当src图片加载失败时显示的内容
  * onload,onerror,监听图片加载
```js
     id.onload = function(){
       console.log("加载成功");
     }
     id.onerror = function(){
       console.log("加载失败")
     };
     即可计数加载成功失败次数
```
  * max-width:100% 响应式,使得图片在任何尺寸屏幕都显示全
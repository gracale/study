看jQuery的代码，第一个感觉就是简洁易懂<br>
一、选择网页元素

```js
$(document) //选择整个文档对象
```

二、筛选获得元素
```js
$('div').not('.myClass'); //选择class不等于myClass的div元素
```

三、链式操作
```js
$('div') //找到div元素

　　　.find('h3') //选择其中的h3元素

　　　.eq(2) //选择第3个h3元素

　　　.html('Hello'); //将它的内容改为Hello
```
甚至还有回退功能
```js
$('div')

　　　.find('h3')

　　　.eq(2)

　　　.html('Hello')

　　　.end() //退回到选中所有的h3元素的那一步

　　　.eq(0) //选中第一个h3元素

　　　.html('World'); //将它的内容改为World
```

四、创建和修改元素<br>
使用同一个函数，来完成取值（getter）和赋值（setter）
```js
$('h1').html(); //html()没有参数，表示取出h1的值

$('h1').html('Hello'); //html()有参数Hello，表示对h1进行赋值
```

五、移动元素
```js
$('div').insertAfter($('p')); //把div元素移动p元素后面：返回div元素

$('p').after($('div'));//把p元素加到div元素前面：返回p元素
```
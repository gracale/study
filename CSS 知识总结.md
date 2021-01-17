渲染原理
1. HTML构建HTML树
2. CSS构建CSS树
3. 合并成一颗渲染树
4. Layout-Paint-Compose依次进行
transition
```css
#heart{
  margin:100px;
  position:relative;
  display: inline-block;
  transition: all .5s;
}
#heart:hover{
  transform:scale(1.5);
}
```
***
animation
```css
#heart{
  margin:100px;
  position:relative;
  display: inline-block;
  animation: heart 1s alternate infinite;
}
#heart:hover{
  from{
    transform:scale(1.0);
  }
  to{
    transform:scale(2.0);
  }
}
```
***
个人感觉animation更灵活一些


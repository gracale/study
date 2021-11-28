//原型继承
let f = function () {
    this.a = 1;
    this.b = 2;
 }
 let o = new f() 
 //此时f.prototype被创建
 //为f()添加属性__proto__将该属性链接至构造函数的原型对象
 //将this绑定到f()

 f.prototype.b=3
 f.prototype.c=4

 console.log(o.a)
 //在f()里找到了a 继承之
 console.log(o.b)
 //在f()里找到了b 不必再去Prototype寻找
 console.log(o.c)
 //f()没有c 但是Prototype有c
 console.log(o.d)
 //两处都没有d 返回undefined


//类继承
class Man{
     constructor(height,weight){
         this.height = height;
         this.weight = weight;
     }
 }

 class Health extends Man{
     get bmi(){
         return this.weight/(this.height*this.height)
     }
 }
let com = new Health(1.7,70);
const fs = require("fs") //引入fs用于读数据库

//读数据库
const userString = fs.readFileSync("./db/user.json").toString();
const userArray = JSON.parse(userString); //转为数组

//写数据库
const user3 = {id:3,name:'tom',password:'abc'}
userArray.push(user3) //把user3这行数据加入userArray
const string = JSON.stringify(userArray)
fs.writeFileSync('./db/user.json',string)
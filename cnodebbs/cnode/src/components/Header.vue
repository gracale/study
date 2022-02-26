<template>
    <div class="header">
        <router-link :to="{name:'root'}">
            <img src="../assets/cnodejs_light.svg" alt="">
        </router-link>
        <ul>
            <li><router-link :to="{name:'root'}">首页</router-link></li>
            <li><a href="#">新手入门</a></li>
            <li><a href="#">api</a></li>
            <li><a href="#">关于</a></li>
            <li><a href="#">注册</a></li>
            <li><a href="#">登录</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.header{
    background-color:#5a5555;
    height: 50px;
}
img{
    max-width: 120px;
    margin-left:50px ;
    margin-top: 10px;
}
ul{
    list-style: none;
    /* 取消默认样式 */
    float: right;
    margin:4px ;
}    
li{
    display: inline-block;
    /* 转为行内块元素 */
    padding: 10px 15px;
}
a{
    text-decoration: none;
    color: #ccc;
    font-size: 14px;
    text-shadow: none;
}
</style>
<template>
    <ul>
       <li>
           <router-link :to="{name:'helloworld',params:{worldmsg:'你好世界'}}">hello world</router-link>
        </li> 
       <li>
           <router-link :to="{name:'helloearth',params:{earthmsg:'你好地球'}}">hello earth</router-link>
        </li>
    </ul>
</template>

<script>

export default{
    name:"list"
}
</script>

<style>

</style>
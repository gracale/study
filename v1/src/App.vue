<template>
  <router-view />
</template>

<script lang="ts">
import { ref,provide } from "vue"
import { router } from "./router";

export default {
  name: 'App',
  setup() {
    //获取页面宽度,然后决定是否显示侧边栏按钮
    const width = document.documentElement.clientWidth
    const menuVisible = ref(width <= 500 ? false:true);
    provide('menuVisible',menuVisible)
    router.afterEach(()=>{
      if (width <= 500){
        //每次切换路由 侧边栏都会关闭
        menuVisible.value = false;
      }
    })
  }
}
</script>

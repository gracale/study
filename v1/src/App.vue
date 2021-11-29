<template>
  <router-view />
</template>

<script lang="ts">
import { ref,provide } from "vue"

export default {
  name: 'App',
  setup() {
    //获取页面宽度,然后决定是否显示侧边栏按钮
    const width = document.documentElement.clientWidth
    const menuVisible = ref(width <= 500 ? false:true);
    provide('menuVisible',menuVisible)
  }
}
</script>

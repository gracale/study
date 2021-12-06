<template>
    <div>
        <slot  />
    </div>
    <h1>实例1</h1>
    <div><button>你好</button></div>
</template>
<script lang='ts'>
import Button from '../lib/Button.vue'
export default{
    components:{Button:Button}
}
</script>
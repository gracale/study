<template>
<div :size="size">
    <button v-bind="rest">
        <slot />
    </button>
</div>
</template>
<script lang="ts">
export default{
    inheritAttrs:false, //div不再默认获得ButtonDemo的绑定事件了
    setup(props, context) {
        const {size, ...rest} = context.attrs
        //ES6 剩余操作符 size和其他属性分离，div拿size，button拿剩下
        return{size,rest}
    }
};
</script>
<style lang="scss" scoped>
    div{
        border: 1px solid red;
    }
</style>
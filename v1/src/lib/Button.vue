<template>
    <button class="v1-button" :class="{ [`theme-${theme}`]: theme }">
        <slot />
    </button>
</template>
<script lang="ts">
export default {
    props: {
        theme: {
            type: String,
            default:'button'
        }
    }
};
</script>
<style lang="scss" scoped>
div {
    border: 1px solid red;
}
</style>
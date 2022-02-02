<template>
    <div>
        我是outter组件拿到的全局状态:{{ getOutterCount }}
        <button @click="oadd">outter--改变状态按钮</button>
        <button @click="oaddaction">outter--改变状态按钮(action)</button>
    </div>
</template>

<script>
export default {
    name: "outter",
    computed: {
        getOutterCount() {
            return this.$store.state.num;
        }
    },
    methods: {
        oadd() {
            this.$store.commit('increase');
        },
        oaddaction() {
            this.$store.dispatch('decreaseAction')
        }
    },
}
</script>

<style>
</style>
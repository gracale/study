<template>
    <div>
        <span>我是子组件</span>
        ----{{ msg }}
        <br />
        ----我是子组件拿到的全局状态: {{ getNum }}
        <button @click="senMsgToFa">向父组件传递数据</button>
        <button @click="sadd">子组件--改变状态按钮</button>
        <button @click="saddaction">子组件--改变状态按钮(action)</button>
    </div>
</template>

<script>
export default {
    name: "parent",
    data() {
        return {
            toFatherMsg: '我是你的son'
        }
    },
    props: {
        msg: {
            type: String,
            default: ''
        }
    },
    methods: {
        senMsgToFa() {
            //把数据this.toFatherMsg传给一个名为handle的组件(在parent那边)
            this.$emit('handle', this.toFatherMsg)
        },
        sadd() {
            this.$store.commit('increase');
        },
        saddaction() {
            this.$store.dispatch('decreaseAction')
        }
    },
    computed: {
        getNum() {
            return this.$store.state.num;
        }
    }
}
</script>

<style>
</style>
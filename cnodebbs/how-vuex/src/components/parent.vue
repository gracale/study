<template>
    <div>
        <span>我是父组件</span>----{{ fromSonMsg }}
        我是父组件拿到的全局状态{{getCount}}
        <button @click="padd">父组件--改变状态按钮</button>
        <button @click="paddaction">父组件--改变状态按钮(action)</button>
        <hr />
        <son :msg="toSonMsg" @handle="getMsgFromSon"></son>
    </div>
</template>


<script>
import son from './son.vue'
export default {
    name: "parent",

    data() {
        return {
            toSonMsg: '我是你爸爸',
            fromSonMsg: ''
        }
    },
    components: {
        son
    },
    methods: {
        getMsgFromSon(value) {
            //value是son里this.toFatherMsg传输过来的数据
            this.fromSonMsg = value
        },
        padd(){
            this.$store.commit('increase');
        },
        paddaction(){
            this.$store.dispatch('decreaseAction')
        }
    },
    computed: {
        getCount() {
            // return this.$store.state.num;
            return this.$store.getters.getNum
        }
    }
}
</script>

<style>
</style>
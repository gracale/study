import Vue from 'vue'

export default new Vue()

/*
使用方法:创建一个vm,给其他组件做互相监听
import Bus from '@/helpers/bus'

Bus.$on('test',msg=>{
    console.log(msg)
})
 
Bus.$emit('test','hello man')
*/
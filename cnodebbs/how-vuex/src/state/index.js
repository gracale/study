import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//创建一个状态仓库
export default new Vuex.Store({
    state: {
      num: 88,
    },
    mutations: {
      //定义状态改变函数
      increase(state) {
        state.num++;
      },
      decrease(state) {
        state.num = state.num - 20;
      }
    },
    actions: {
      //context为上下文对象
      decreaseAction(context) {
        //action中只能对mutation进行操作
        //action可以异步
        // setTimeout(() => {
        //   context.commit('decrease')
        // }, 500);
        context.commit('decrease')
      }
    },
    getters: {
      getNum(state) {
        return state.num > 0 ? state.num : 0
      }
    }
  })
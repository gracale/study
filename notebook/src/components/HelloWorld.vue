<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
        <router-link to="/login"><el-button type="primary">点此注册/登录</el-button>   </router-link>
      
    </div>
  </div>
</template>

<script>
import { Message } from 'element-ui'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎使用快速云笔记'
    }
  },

  methods: {
    open() {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

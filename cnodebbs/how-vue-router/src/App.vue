<template>
  <div id="app">
    <router-view></router-view>
    <img src="./assets/logo.png" />
    <list />
  </div>
</template>

<script>
import list from './components/list'

export default {
  name: 'App',
  data() {
    return {

    }
  },
  components:{
    list
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

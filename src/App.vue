<template>
  <div id="app">
      <Hello></Hello>
      <hr/>
      <miaov></miaov>
  </div>
</template>

<script>
import Hello from "./components/hello"
import miaov from "./components/miaov"
export default {
  name: 'App',
  components:{
    Hello,
    miaov
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

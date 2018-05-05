<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<router-view/>-->
    <hello-world></hello-world>
    <detail></detail>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Detail from './components/Detail'
export default {
  name: 'App',
  components: {Detail, HelloWorld}
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

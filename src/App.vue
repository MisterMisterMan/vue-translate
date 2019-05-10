<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <grammar-util word="Zdravo"/>
  </div>
</template>

<script>
import GrammarUtil from './components/GrammarUtil.vue'

export default {
  name: 'app',
  components: {
      GrammarUtil
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

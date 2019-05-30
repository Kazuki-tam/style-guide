<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Let\'s create style guide with Storybook"/>
    <TextArea/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TextArea from './components/TextArea.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    TextArea
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

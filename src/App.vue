<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view class="flex content py-10 px-4 w-full"></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin:0;
  background-color: white;
  padding:0;
}
</style>

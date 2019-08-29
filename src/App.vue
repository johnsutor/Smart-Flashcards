<template>
  <div id="app">
    <div class="flex items-center justify-between flex-wrap bg-blue-300 shadow p-6">
      <div class="flex items-center flex-shrink-0 mr-6">
        <router-link to="/" class="font-semibold text-xl tracking-tight">Smart Flashcards</router-link>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-justify text-sm lg:flex-grow">
          <router-link class="mr-6" to="/subjects">Subjects</router-link> 
          <router-link to="/flashcards/selectsubject">Problems</router-link> 
        </div>
        <div>
          <router-link class= "text-sm" to="/account">Account</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  align-content: center;
  text-align: center;
  color: #2c3e50;
  margin:0;
  background-color: lightgray;
  padding:0;
}
</style>

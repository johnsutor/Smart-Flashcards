<template>
  <div id="app">
    <nav class="flex bg-blue-300 shadow-md p-6">
      <router-link to="/" class="font-semibold text-xl tracking-tight">Smart Flashcards</router-link>
      <div class="text-sm">
        <router-link to="/flashcards/selectsubject">Problems</router-link> 
      </div>
      <div class="text-sm">
        <router-link to="/subjects">Subjects</router-link> 
      </div>
      <div>
        <router-link class="pt-24" to="/account">Account</router-link>
      </div>
    </nav>
    <div class="content pt-20 px-4 w-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin:0;
  background-color: lightgray;
  padding:0;
}
</style>

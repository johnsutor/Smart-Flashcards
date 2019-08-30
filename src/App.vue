<template>
  <div id="app">
    <nav class="flex items-center justify-between flex-wrap bg-blue-300 shadow-md p-6">
      <div>
        <router-link to="/" class="font-semibold text-xl tracking-tight items-center mr-6">Smart Flashcards</router-link>
      </div>
      <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm mr-6 hover:text-white active:text-white">
          <router-link to="/flashcards/selectsubject">Problems</router-link> 
        </div>
        <div class="text-sm mr-6 hover:text-white active:text-white">
          <router-link to="/subjects">Subjects</router-link> 
        </div>
      </div>
      <div class="text-sm align-right hover:text-white active:text-white">
          <router-link to="/account">Account</router-link>
      </div>
    </nav>
    <div class="flex content py-10 px-4 w-full">
      <router-view></router-view>
    </div>
    <div class="w-full bg-blue-300 py-20">
      Footer here
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
  background-color: white;
  padding:0;
}
</style>

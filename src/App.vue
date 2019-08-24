<template>
  <div id="app">
<<<<<<< HEAD
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
=======
    <div class="flex items-center justify-between flex-wrap bg-blue-300 shadow p-6">
      <div class="flex items-center flex-shrink-0 mr-6">
        <router-link to="/" class="font-semibold text-xl tracking-tight">Smart Flashcards</router-link>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <router-link class="mr-6" to="/subjects">Subjects</router-link> 
          <router-link to="/flashcards/selectsubject">Problems</router-link> 
        </div>
        <div>
          <router-link class= "text-sm" to="/account">Account</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
>>>>>>> 7cd942312e37579f6d38505e6c1602c6f5d0c381
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
<<<<<<< HEAD
  text-align: center;
=======

  color: #2c3e50;
>>>>>>> 7cd942312e37579f6d38505e6c1602c6f5d0c381
  margin:0;
  background-color: lightgray;
  padding:0;
}
</style>

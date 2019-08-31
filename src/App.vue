<template>
  <div id="app">
    <nav class="flex items-center justify-between flex-wrap bg-blue-300 shadow-md p-2 lg:p-6">
      <div>
        <router-link to="/" class="font-semibold text-xl tracking-tight items-center mr-6">Smart Flashcards</router-link>
      </div>
      <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto h-full">
        <div class="text-sm mr-6 hover:text-white h-full">
          <router-link active-class="text-gray-200" to="/flashcards">Problems</router-link> 
        </div>
        <div class="text-sm mr-6 hover:text-white">
          <router-link active-class="text-gray-200" to="/subjects">Subjects</router-link> 
        </div>
      </div>
      <div class="text-sm align-right hover:text-white">
          <router-link active-class="text-gray-200" to="/account">Account</router-link>
      </div>
    </nav>
    <div class="flex content py-10 px-4 w-full">
      <router-view></router-view>
    </div>
    <div class="w-full bg-blue-300 py-10 lg:py-20">
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

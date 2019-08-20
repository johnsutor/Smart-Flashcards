<template>
  <div id="app">
    <div id="nav">
      <h2><router-link to="/" id=logo>Smart FlashCards </router-link>    </h2>
      <router-link to="/subjects">Subjects</router-link> 
      <router-link to="/flashcards/select-subject">Problems</router-link> 
      <router-link to="/account">Account</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
}
#nav a {
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: darkgreen;
}
</style>

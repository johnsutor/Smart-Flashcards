<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" id=logo>Smart FlashCards </router-link>    
      <router-link to="/subjects">Subjects</router-link> 
      <router-link to="/flashcards/selectsubject">Problems</router-link> 
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
#nav {
  width: stretch;
  align-content: right;
  padding: 10px;
  display: inline-block;
  background-color:lightseagreen;
  margin:0;
}
#logo {
  font-size: 18pt;
  display: inline-block;
  padding-right: 30px;
}
#nav a {
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: darkgreen;
}
</style>

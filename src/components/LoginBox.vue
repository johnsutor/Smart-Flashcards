<template>
  <div>
    <h3>Sign in with Google</h3>
    <button @click="googleLogin">Google Logo here</button>
  </div>
</template>

<script>
// import firebase from 'firebase';

export default {
  name: 'LoginBox',

  methods: {
    googleLogin() {
      this.$store.dispatch('ProviderSignIn', {provider: 'Google'})
      .then(() => {
        this.$router.push({name: 'dashboard'})
      }).catch( err => {
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div class="flex flex-col w-5/6 max-w-md lg:w-1/3 md:w-1/2 bg-white rounded m-2 h-auto py-4 shadow-md flex-col relative justify-center items-center">
    <div v-if="!signUpFlag" class="mb-2 text-left">Sign In:</div>
    <div v-else class="mb-2 text-left">Sign Up:</div>
    <input class="border shadow rounded mb-2 w-5/6 py-1" v-model="username" placeholder="Username">
    <input class="border shadow rounded mb-2 w-5/6 py-1" v-model="password" placeholder="Password">
    <div v-if="!signUpFlag" class="w-5/6">
      <button class="border border-green-400 rounded text-green-400 py-1 hover:bg-gray-200 w-full" @click="signIn">Sign In</button>
    </div>
    <div v-else class="w-5/6">
      <button class="border border-green-400 rounded text-green-400 py-1 hover:bg-gray-200 w-full" @click="signUp">Sign Up</button>
    </div>
    <div v-if="!signUpFlag">
      <div class="text-sm inline mr-1">New here?</div>
      <button class="text-sm text-green-400 inline" @click="toggleSignIn">Sign Up</button>
    </div>
    <div v-else>
      <div class="text-sm inline mr-1">Already have an account?</div>
      <button class="text-sm text-green-400 inline" @click="toggleSignIn">Sign In</button>
    </div>
    <div class="text-center"> OR:</div>
    <button class="bg-red-700 mb-2 rounded w-5/6 py-1" @click="googleLogin">Google</button>
    <button class="bg-blue-700 rounded w-5/6 py-1" @click="facebookLogin">Facebook</button>
  </div>
</template>

<script>
// import firebase from 'firebase';

export default {
  name: 'LoginBox',
  data() {
    return {
      signUpFlag: false,
      username:"",
      password:"",
    }
  },
  methods: {
    googleLogin() {
      this.$store.dispatch('ProviderSignIn', {provider: 'Google'})
      .then(() => {
        this.$router.push({name: 'dashboard'})
      }).catch( err => {
        return err
      })
    },
    facebookLogin() {
      this.$store.dispatch('ProviderSignIn', {provider: 'Facebook'})
      .then(() => {
        this.$router.push({name: 'dashboard'})
      }).catch( err => {
        console.log(err)
      })
    },
    toggleSignIn() {
      this.signUpFlag = !this.signUpFlag
    },
    signIn() {

    },
    signUp() {

    }
  }
}
</script>

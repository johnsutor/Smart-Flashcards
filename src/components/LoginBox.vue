<template>
<div class="LoginBox w-5/6 bg-white rounded mx-auto">
  <span class="mt-4 pb-4 text-2xl lg:text-3xl">Log In</span>
  <div class="w-full justify-center items-center flex-col flex relative my-2 h-auto">
    <button class="bg-red-700 w-full mb-2 rounded w-5/6 text-white text-lg p-2 sm:p-4 sm:text-xl hover:bg-red-800 hover:shadow" @click="googleLogin">
      <font-awesome-icon :icon="['fab', 'google']"></font-awesome-icon>      
      Google
    </button>
    <button class="bg-blue-700 w-full rounded w-5/6 text-white text-lg p-2 sm:p-4 sm:text-xl hover:bg-blue-800 hover:shadow" @click="facebookLogin">
      <font-awesome-icon :icon="['fab', 'facebook-f']"></font-awesome-icon>      
      Facebook
    </button>
  </div>
</div>
</template>

<script>
export default {
  name: 'LoginBox',
  data() {
    return {
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
  }
}
</script>

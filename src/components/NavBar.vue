<template>
  <nav class="flex items-center justify-between flex-wrap bg-blue-300 shadow-md p-2 lg:p-4">
    <div>
      <router-link v-if="$store.getters.GetCurrentUserProfile.username" to="/dashboard" class="font-semibold text-xl tracking-tight items-center mr-12">Smart Flashcards</router-link>
      <router-link v-else to="/" class="font-semibold text-xl tracking-tight items-center mr-6">Smart Flashcards</router-link>
    </div>
    <div class="block lg:hidden">
      <button @click="dropdownMenu" class="flex items-center px-3 py-2 rounded hover:text-gray-700">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div :class="menuOpen ? 'block' : 'hidden'" class="w-full flex-grow lg:flex lg:items-center lg:w-auto h-full">
      <div v-if="this.$store.getters.GetCurrentUserProfile.username" class="text-sm mr-8 hover:text-white h-full">
        <router-link active-class="text-gray-200 font-bold" to="/flashcards">Problems</router-link> 
      </div>
      <div v-if="this.$store.getters.GetCurrentUserProfile.username" class="text-sm hover:text-white">
        <router-link active-class="text-gray-200 font-bold" to="/subjects">Explore Subjects</router-link> 
      </div>
    </div>
    <div :class="menuOpen ? 'block' : 'hidden'" class="lg:flex text-sm align-right mr-8 ">
        <div  v-if="this.$store.getters.GetCurrentUserProfile.username" class="hover:text-white cursor-pointer" id="Account" @click="dropdownAcc" >Account</div>
        <div class="dropdown-content rounded text-sm shadow-md bg-white text-base mt-6" id="myDropdown">
          <div class= "pl-1 py-1">{{this.$store.getters.GetCurrentUserProfile.username}}</div>
          <div class="hover:bg-gray-400 rounded cursor-pointer w-40 pl-1 py-1" @click="signOut">Sign out</div>
        </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'NavBar',
  props: {
  },
  data() {
    return {
      menuOpen: false,
    }
  },
  methods: {
    dropdownAcc() {
      document.getElementById("myDropdown").classList.toggle("show");
      document.getElementById("Account").classList.toggle("accountActive");
    },
    dropdownMenu() {
      this.menuOpen = !this.menuOpen;
    },
    signOut() {
      this.$store.dispatch('SignOut');
      this.dropdownAcc();
    }
  }
}
</script>

<style scoped>
.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  min-width: 160px;
  z-index: 1;
  
}

.show {
  display: block;
  right:0;
}

.accountActive {
  font-weight: bold;
  color: white;
}
</style>
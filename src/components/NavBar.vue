<template>
  <nav class="flex items-center justify-between flex-wrap bg-blue-300 shadow-md p-2 lg:p-6">
    <div>
      <router-link to="/" class="font-semibold text-xl tracking-tight items-center mr-6">Smart Flashcards</router-link>
    </div>
    <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto h-full">
      <div class="text-sm mr-6 hover:text-white h-full">
        <router-link active-class="text-gray-200" to="/flashcards">Problems</router-link> 
      </div>
      <div class="text-sm mr-6 hover:text-white">
        <router-link active-class="text-gray-200" to="/subjects">Explore Subjects</router-link> 
      </div>
    </div>
    <div class="text-sm align-right mr-6">
        <div class="hover:text-white cursor-pointer" @click="dropdown" >Account</div>
        <div class="dropdown-content text-sm shadow-md bg-white rounded py-1 px-1 align-left text-left" id="myDropdown">
          <div>Username</div>
          <div class="text-left hover:bg-gray-400 py-1 px-1 rounded cursor-pointer" @click="$store.dispatch('SignOut')">Sign out</div>
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
    }
  },
  methods: {
    dropdown() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
  }
}
</script>

<style scoped>
.dropdown-content {
  display: none;
  position: absolute;
  z-index: 1;
}


.show {
  display: block;
}
</style>
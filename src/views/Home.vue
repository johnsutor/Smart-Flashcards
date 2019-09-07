<template>
  <div class="flex flex-col lg:flex-row content-center justify-center w-full items-center pt-32">
    <div class="w-full lg:w-1/2 my-auto px-4 pt-20 lg:pt-0">
      <LoginBox></LoginBox>
    </div>
    <div class="w-full lg:w-1/2 my-auto px-4 mx-auto text-center lg:pt-0 order-first lg:order-last">
      <img src="@/assets/undraw_problem_solving_ft81.svg" alt="Problem Solving"
      class="mx-auto w-1/2">
      <br>
      <h2 class="text-2xl lg:text-4xl font-bold">
        Questions that utilize reinforcement learning to optimize your studying experience.
      </h2>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginBox from '@/components/LoginBox.vue'

export default {
  name: 'home',
  components: {
    LoginBox
  },
  beforeCreate() {
    if (this.$store.getters.GetCurrentUserProfile.username) {
      this.$router.push('/dashboard');
    }
  }
}
</script>

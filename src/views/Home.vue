<template>
  <div class="flex flex-col w-full items-center py-10">
    <h2 class="text-base md:text-lg lg:text-lg italic">
      Questions that utilize reinforcement learning to optimize the studying experience.
    </h2>
    <div class="text-sm md:text-auto lg:text-auto pb-6">
      Sign in below to help us keep track of your progress and show you the questions you need to see!
    </div>
    <LoginBox></LoginBox>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginBox from '@/components/LoginBox.vue'

export default {
  name: 'home',
  components: {
    LoginBox
  }
}
</script>

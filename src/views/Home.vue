<template>
  <div class="flex flex-col w-full items-center">
    <h2>Smart flashcards: Flashcards that utilize reinforcement learning to optimize the studying experience </h2>
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

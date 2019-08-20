<template>
  <div class="home">
    <h2>What we d: </h2>
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

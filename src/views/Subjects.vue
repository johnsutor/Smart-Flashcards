<template>
  <div class="debug ">
    <h1>My Subjects</h1>
    <div class="flex flex-wrap justify-center">
      <Subject v-for="subject in subjectList" v-bind:key="subject" v-bind:subjectName="subject" :numCards=0 ></Subject>
    </div>
    <h1>Explore Subjects</h1>
    <div class="flex flex-wrap justify-center ">
      <Subject v-for="subject in subjectList" v-bind:key="subject" v-bind:subjectName="subject" :numCards=0 ></Subject>
    </div>
  </div>
</template>

<script>
import Subject from '@/components/Subject.vue'

export default {
  name: 'Subjects',
  components: {
    Subject
  },
  data() {
    return {
      subjectList: ['AP US History', 'AP World History', 'AP Biology']
    }
  }
}
</script>

<style scoped>
.debug {
  outline: 1px solid red;
}
.debug > * {
  outline: 1px solid blue;
}
</style>
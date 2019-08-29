<template>
<<<<<<< HEAD
  <div class="debug ">
    <h1>My Subjects</h1>
    <div class="flex flex-wrap justify-center">
      <Subject v-for="subject in subjectList" v-bind:key="subject" v-bind:subjectName="subject" :numCards=0 ></Subject>
    </div>
    <h1>Explore Subjects</h1>
    <div class="flex flex-wrap justify-center ">
      <Subject v-for="subject in subjectList" v-bind:key="subject" v-bind:subjectName="subject" :numCards=0 ></Subject>
=======
  <div class="flex flex-col items-center">
    <h1>Subjects</h1>
    <div class="flex flex-row w-full">
      <Subject v-for="subject in subjectList" :key="subject" :subjectName="subject"></Subject>
>>>>>>> 0bba4e66971ac50a36ee013322e53eb2b96f860f
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
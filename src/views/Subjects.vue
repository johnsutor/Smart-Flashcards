<template>
  <div class="flex flex-col w-full">
    <h1 class="ml-2">My Subjects</h1>
    <div class="flex flex-wrap ">
      <Subject v-for="subject in subjectList" v-bind:key="subject" v-bind:subjectName="subject" :numCards=0 ></Subject>
    </div>
    <h1 class="ml-2">Explore Subjects</h1>
    <div class="flex flex-wrap">
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
      subjectList: ['AP US History', 'AP World History', 'AP Biology','Another one']
    }
  }
}
</script>

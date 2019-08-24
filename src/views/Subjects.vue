<template>
  <div class="flex flex-col items-center">
    <h1>Subjects</h1>
<<<<<<< HEAD
    <div class="flex flex-row w-full">
      <Subject v-for="subject in subjectList" :key="subject" :subjectName="subject"></Subject>
    </div>
=======
    <Subject class="flex justify-center" v-for="subject in subjectList" v-bind:key="subject" v-bind:subjectName="subject" ></Subject>
>>>>>>> 7cd942312e37579f6d38505e6c1602c6f5d0c381
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
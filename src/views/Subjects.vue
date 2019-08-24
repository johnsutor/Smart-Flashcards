<template>
  <div>
    <h1>Subjects</h1>
    <div class="flex flex-row w-full">
      <Subject v-for="subject in subjectList" :key="subject" :subjectName="subject"></Subject>
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
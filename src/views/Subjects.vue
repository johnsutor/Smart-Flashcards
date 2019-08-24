<template>
  <div>
    <h1>Subjects</h1>
    <Subject class="flex justify-center" v-for="subject in subjectList" v-bind:key="subject" v-bind:subjectName="subject" ></Subject>
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
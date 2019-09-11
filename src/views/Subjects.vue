<template>
  <div class="flex flex-col w-full">
    <h1 class="ml-2 mt-0 md:mt-4 mb-0 md:mb-4 text-lg md:text-2xl">Explore Subjects</h1>
    <div class="flex flex-wrap">
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
    }
  }
}
</script>

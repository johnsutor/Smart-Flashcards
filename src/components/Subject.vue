<template>
  <div id="subjectCard" class="flex flex-initial w-2/5 md:w-64 bg-white rounded m-2 h-64 shadow-md flex-col relative" :class="subject_.exists?'':'opacity-50'">
    <img :src="subject_.photo_url" class="object-contain rounded-t top-0 py-0 my-0">  
    <div class="ml-1 text-sm md:text-base lg:text-base md:mt-2 lg:mt-2 font-bold pt-2">
      <span>
        {{subject_.name}}
      </span><br>
      <span>
        {{subject_.num_cards}} cards
      </span>
    </div>
    <button v-if="subject_.exists" @click="pushToSubject" class="absolute text-sm md:text-base lg:text-base bg-blue-500 px-2 py-1 text-white rounded shadow-md bottom-0 mb-2 right-0 mr-2">
      Study
    </button>
    <button v-else @click="pushToSubject" class="absolute text-sm md:text-base lg:text-base bg-blue-500 px-2 py-1 text-white rounded shadow-md bottom-0 mb-2 right-0 mr-2 hover:bg-gray-400">
      <span class="study">Study</span>
      <span class="coming-soon">Coming Soon!</span>
    </button>
  </div>
</template>

<script>

export default {
  name: 'Subject',
  props: {
    subject: Object,
  },
  data() {
    return {
      subject_: {},
      subject_ref: '',
    }
  },
  created() {
    this.subject_ref = this.subject.ref.id
    this.subject_ = this.subject.data()
  },
  methods: {
    pushToSubject() {
      if (this.subject.exists) {
        console.log(this.subject_ref)
        this.$router.push(this.subject_ref)
      } else {
      }
    }
  },
}
</script>

<style scoped>
button .coming-soon { 
  display: none; 
}
button:hover .study { 
  display: none; 
}
button:hover .coming-soon { 
  display: inline; 
}
.fade-out {
  opacity: .4;
}
</style>
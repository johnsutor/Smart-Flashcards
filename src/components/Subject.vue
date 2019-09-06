<template>
  <div id="subjectCard" class= "flex flex-initial w-2/5 md:w-64 bg-white rounded m-2 h-64 shadow-md flex-col relative">
    <img src="https://debrabell.com/wp-content/uploads/2016/01/AP-US-History.jpg" class="object-contain top-0 h-40 py-0 my-0">  
    <div class="ml-1 text-sm md:text-base lg:text-base md:mt-2 lg:mt-2">
      {{subjectName}} - {{numCards}} cards
    </div>
    <button v-if="!comingSoon" @click="pushToSubject" class="absolute text-sm md:text-base lg:text-base bg-blue-500 px-2 py-1 text-white rounded shadow-md bottom-0 mb-2 right-0 mr-2 hover:bg-blue-300 ">
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
    subjectName: String,
    numCards: Number,
    userSubscribed: Boolean,
    comingSoon: Boolean,
  },
  data() {
    return {
      subjectPath: "flashcards/"+this.subjectName.replace(/ /g, ''),
    }
  },
  methods: {
    pushToSubject() {
      if (this.comingSoon === true) {
        //document.getElementById("subjectCard").classList.toggle("fade-out");
      } else {
        this.$router.push(this.subjectPath);
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
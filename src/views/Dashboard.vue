<template>
<div class="flex flex-col w-full">
   <!-- User Subjects -->
    <h1 class="ml-2 mt-4 pb-4 text-2xl">Your Subjects</h1>
    <div class="flex flex-wrap ">
      <Subject v-for="(subject, index) in user_subjects" :key="index" :subject="subject"></Subject>
    </div>
    <!-- All Subjects -->
    <h1 class="ml-2 mt-4 pb-4 text-2xl">Explore Subjects</h1>
    <div class="flex flex-wrap">
      <Subject v-for="(subject, index) in all_subjects" :key="index" :subject="subject"></Subject>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'PageDashboard',
  data() {
    return {
      all_subjects: Array,
      user_subjects: Array,
    }
  },
  created() {
    // Fetch subjects from the user's subscriptions
    for(let i = 0; i < this.$store.getters.GetCurrentUserProfile.subjects.length; i++) {
      firebase.firestore().collection('subjects').doc(this.$store.getters.GetCurrentUserProfile.subjects[i]).get()
      .then( subject => {
        this.user_subjects.push(subject.data())
      })
    }

    // Fetch all subjects
    firebase.firestore().collection('subjects').get()
    .then( subjects_ref => {
      subjects_ref.forEach( subject => {
        this.all_subjects.push(subject.data())
      })
    }) 
  },
  components: {
    Subject: () => import('../components/Subject')
  }
}
</script>
<template>
  <div class="dashboard">
    <!-- User Subjects -->
    <Subject v-for="(subject, index) in user_subjects" :key="index" :subject="subject"></Subject>

    <!-- All Subjects -->
    <Subject v-for="(subject, index) in all_subjects" :key="index" :subject="subject"></Subject>
  </div>
</template>

<script>
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
    Subject = () => import('../components/Subject')
  }
}
</script>
<template>
  <div class="dashboard">

  </div>
</template>

<script>
export default {
  name: 'PageDashboard',
  data() {
    return {
      subjects: Array
    }
  },
  created() {
    firebase.firestore().collection('subjects').get()
    .then( subjects_ref => {
      subjects_ref.forEach( subject => {
        this.subjects.push(subject.data())
      })
    }) 
  }
}
</script>
<template lang="html">
  <div class="">
    <h1>Users Overview</h1>
    <p>Team Id is {{ $route.params.teamId }}</p>
    <button type="button" name="button" @click="goHome()">go Home</button>
  </div>
</template>

<script>
export default {
  watch: {
      '$route' (to, from) {
        alert(to.params.teamId);
      }
  },

  created(){
    //alert(this.$route.params.teamId)
  },

  methods: {
    goHome(){
      this.$router.push('/')
    }
  }

}
</script>

<style lang="css">
</style>

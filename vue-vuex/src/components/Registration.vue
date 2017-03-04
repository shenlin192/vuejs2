<template lang="html">
  <div id="registration">
    <h3>Register here</h3>
    <hr>
    <div class="row" v-for="user in users">
      <h4>{{ user.name }}</h4>
      <button @click="registerUser(user)">Register</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.getters.unregisteredUsers;
    }
  },
  methods: {
    registerUser(user) {
      user.registered = true;
      const date = new Date;
      this.$store.state.registrations.push({
        userId: user.id, name: user.name, date: date.getMonth()+'/'+date.getDay()
      })
    }
  }
}
</script>

<style lang="css">
</style>

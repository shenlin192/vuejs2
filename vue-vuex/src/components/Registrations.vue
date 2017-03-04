<template lang="html">
  <div id="registrations">
    <div class="summary">
      <h3>Registrations</h3>
      <h5>Total: {{total}}</h5>
    </div>
    <hr>
    <div class="row" v-for="registration in registrations">
      <h4>{{ registration.name }}</h4>
      <span @click="unregister(registration)">(unregister)</span>
      <div class="date">{{ registration.date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    registrations() {
      console.log(this.$store)
      return this.$store.state.registrations;
    },
    total() {
      return this.$store.state.registrations.length;
    }
  },
  methods: {
    unregister(registration) {
      const user = this.$store.state.users.find(user => {
        return user.id == registration.userId;
      });
      user.registered = false;
      this.$store.state.registrations.splice(this.$store.state.registrations.indexOf(registration),1);
    }
  }
}
</script>

<style lang="css">
</style>

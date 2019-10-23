<template lang="html">
  <form @:submit="handleSubmit" class="" action="index.html" method="post">
    <label for="name">Name: </label>
    <input v-model='name'type="text" id="name" value="">
    <label for="email">Email: </label>
    <input v-model='email' type="text" id="email" value="">
    <label for="checkedIn">Checked In</label>
    <input v-model='checkedIn' type="checkbox" id="checkedIn" value="">
    <input type="submit" name="" value="Add Booking">
  </form>
</template>

<script>
import BookingService from '@/services/bookingService.js';
import {eventBus }from '@/main.js';

export default {
  name:'booking-form',
  data() {
    return {
      name: null,
      email: null,
      checkedIn: false
    }
  },
  methods:{
    handleSubmit(event) {
      event.preventDefault()
      const newBooking = {
        name: this.name,
        email: this.email,
        checkedIn: this.checkedIn
      }
      BookingService.addBooking(newBooking)
      .then(res => eventBus.$emit('add-booking', res))
    }
  }
}
</script>

<style lang="css" scoped>
</style>

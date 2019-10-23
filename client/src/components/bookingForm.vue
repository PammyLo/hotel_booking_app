<template lang="html">
  <div>
    New Guest:
  <form v-on:submit="handleSubmit" class="form" action="index.html" method="post">
    <label for="name"> Name: </label>
    <input v-model='name'type="text" id="name" required>
    <label for="email">Email: </label>
    <input v-model='email' type="text" id="email" required>
    <label for="checkedIn">Checked In</label>
    <input v-model='checkedIn' type="checkbox" id="checkedIn" value="">
    <input class="submit-button" type="submit" name="" value="Add Booking">
  </form>
</div>
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

div {

  display: flex;
  justify-content: center;
  letter-spacing: 0px;
  justify-content: space-between;
  width: 60%;
}
.submit-button {

  background-color: #FADCF5;
  border-radius: 10px;
}

</style>

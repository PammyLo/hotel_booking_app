<template lang="html">
  <div class="guest-list">
    <li v-for='(guest, index) in guests' :key='index'>
      <h3>{{guest.name}}</h3>
      <p class='email'>{{guest.email}}</p>
      <input v-model="guest.checkedIn" type="checkbox" name="" value="">
      <button v-on:click='handleDelete(guests[index]._id)' type="button">Delete</button>
    </li>
  </div>

</template>

<script>
import BookingService from '@/services/bookingService.js'
import {eventBus} from "@/main.js"
export default {
  name: 'list-item',
  props: ['guests'],
  methods: {
    handleDelete(id) {
      BookingService.deleteBooking(id)
        .then(() => eventBus.$emit('booking-deleted', id))
    }
    // handleChange(id) {
    //   BookingService.changeBooking(id)
    //     .then(() => eventBus.$emit('booking-changed', id))
    // }
  }
}
</script>

<style lang="css" scoped>
  li {
    display: flex;
    justify-content: space-between;
    width: 60%
  }

  p.email {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  button {
    height: 17px;
    width: 17px;
    border: none;
  }

  button.checkedin {
    background-image: url('../assets/check-square-solid.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  button.notcheckedin {
    background-image: url('../assets/square-regular.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .guest-list {
    border-width: 2px;
  }

</style>

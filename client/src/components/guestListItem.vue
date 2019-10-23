<template lang="html">
  <div class="guest-list">
    <li v-for='(guest, index) in guests' :key='index'>
      <h3>{{ guest.name }}</h3>
      <p class='email'>{{ guest.email }}</p>
      <input v-on:change="handleChange"
      type="checkbox" v-model="guest.checkedIn" >
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
  data() {
    return {
      checkedIn: false
    }
  },
  methods: {
    handleDelete(id) {
      BookingService.deleteBooking(id)
        .then(() => eventBus.$emit('booking-deleted', id))
    },
    handleChange(id) {
      const changes = {
        checkedIn: this.checkedIn
      }
      BookingService.changeBooking( this.guests._id, changes)
        .then(() => eventBus.$emit('booking-changed', id, changes))
    }
  }
}
</script>

<style lang="css" scoped>
  li {
    display: flex;
    justify-content: space-between;
    width: 60%
  }

  h3 {
    width: 30%;
  }

  .email {
    text-align: left;
  }

  button {
    height: 17px;
    width: 17px;
    border: none;
    background-color: #efefefef;
    vertical-align: bottom;
  }

  .guest-list {
    border-width: 2px;
  }

</style>

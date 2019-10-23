<template lang="html">
  <div class="app">
    <booking-form></booking-form>
    <guest-list :guests='guests' ></guest-list>
  </div>
</template>

<script>
import BookingService from '@/services/bookingService.js'
import guestList from "@/components/guestList.vue"
import bookingForm from "@/components/bookingForm.vue"
import {eventBus} from './main.js'
export default {
  name: 'app',
  data() {
    return {
      guests: []
    }
  },
  mounted() {
    BookingService.getBookings()
      .then(bookings => this.guests = bookings);
    eventBus.$on('add-booking', (newBooking) => {
      this.guests.push(newBooking)
    });
    eventBus.$on('booking-deleted', (id) => {
      const index = this.guests.findIndex(guest => guest._id === id);
      this.guests.splice(index, 1)
    })
  },
  components: {
    "guest-list": guestList,
    'booking-form': bookingForm
  }
}
</script>

<style lang="css" scoped>

.app {background-color: #efefefef}

</style>

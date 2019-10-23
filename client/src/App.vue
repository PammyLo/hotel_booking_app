<template lang="html">
  <guest-list :guests='guests' ></guest-list>
</template>

<script>
import BookingService from '@/services/bookingService.js'
import guestList from "@/components/guestList.vue"

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
  },
  components: {
    "guest-list": guestList
  }
}
</script>

<style lang="css" scoped>
</style>

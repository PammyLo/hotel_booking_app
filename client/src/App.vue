<template lang="html">
  <h1>hello world</h1>
</template>

<script>
import BookingService from '@/services/bookingService.js'

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
  }
}
</script>

<style lang="css" scoped>
</style>

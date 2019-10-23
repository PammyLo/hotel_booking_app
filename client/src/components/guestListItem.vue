<template lang="html">
  <div class="">
    <li v-for='(guest, index) in guests' :key='index'>
      <h2>{{guest.name}}</h2>
      <p>{{guest.email}}</p>
      <p v-if="guest.checkedIn">Checked in</p>
    </li>
  </div>

</template>

<script>
export default {
  name: 'list-item',
  props: ['guests']
}
</script>

<style lang="css" scoped>
</style>

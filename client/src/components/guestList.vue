<template lang="html">

  <section>
    <h1>Guest List</h1>
    <ul>
      <guest-list-item :guests='guests' ></guest-list-item>
    </ul>
  </section>

</template>

<script>
import listItem from '@/components/guestListItem.vue'

export default {
  name: "guest-list",
  props: ['guests'],
  components: {
    'guest-list-item': listItem
  }
}
</script>

<style lang="css" scoped>
h1 {
  display: flex;
  margin: 40px;
  color: #81547E;
}
</style>

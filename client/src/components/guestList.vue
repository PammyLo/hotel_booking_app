<template lang="html">

  <section>
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
</style>

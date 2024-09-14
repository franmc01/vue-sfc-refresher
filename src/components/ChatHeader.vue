<script setup lang="ts">
defineProps({
  chatName: {
    type: String,
    default: 'My Vue Chat',
  }
})
</script>

<template>
  <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
    <span>{{chatName}}</span>
  </div>
</template>

<style scoped>

</style>

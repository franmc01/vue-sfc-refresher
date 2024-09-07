<template>
  <composition-counter :initial-value="10" ></composition-counter>
  <setup-counter :initial-value="10"></setup-counter>
  <counter-separated :initial-value="10"></counter-separated>
</template>

<script setup lang="ts">
import CompositionCounter from '@/components/CompositionCounter.vue'
import SetupCounter from '@/components/SetupCounter.vue'
import CounterSeparated from '@/components/CounterSeparated/CounterSeparated.vue'
</script>

<style scoped>
</style>

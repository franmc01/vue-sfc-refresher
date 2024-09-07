<script setup lang="ts">
// import { computed, ref } from 'vue'
import useCounter from '@/composables/useCounter'

const props = defineProps({
  initialValue: {
    value: 0,
    type: Number,
    required: true
  }
})

const { initialValue } = props
const { counter, squareCounter, decrement, increment } = useCounter(initialValue)

// const counter = ref(initialValue)
// const squareCounter = computed(() => counter.value * 2)
//
// const increment = () => counter.value++
// const decrement = () => counter.value--
</script>

<template>
  <section>
    <h2>Composition Counter: {{counter}}</h2>
    <h3>Square counter: {{squareCounter}}</h3>
    <div>
      <button @click="increment">+1</button>
      <button @click="decrement">-1</button>
    </div>
  </section>
</template>

<style scoped>

</style>

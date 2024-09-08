<script lang="ts">
import { defineComponent } from 'vue'
import useCounter from '@/composables/useCounter'

export default defineComponent({
  props: {
    initialValue: {
      type: Number,
      required: false,
      default: 0
    }
  },
  setup(props){
    // const counter = ref(props.initialValue)
    // const squareCounter = computed(() => counter.value * 2)

    // const increment = () => counter.value++
    // const decrement = () => counter.value--

    const { counter, squareCounter, increment, decrement } = useCounter(props.initialValue)
    return {
      // squareCounter: computed(() => counter.value * 2),
      squareCounter,
      counter,
      increment,
      decrement
    }
  }
})

</script>

<template>
  <section>
    <h2 data-test="initial-value">Setup Counter: {{counter}}</h2>
    <h3 data-test="square-value">Square counter: {{squareCounter}}</h3>
    <div>
      <button id="increment" @click="increment">+1</button>
      <button id="decrement" @click="decrement">-1</button>
    </div>
  </section>
</template>

<style scoped>

</style>

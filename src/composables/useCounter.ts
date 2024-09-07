import { computed, ref } from 'vue'

const useCounter = (initialValue = 0) => {
  // State
  const counter = ref(initialValue);

  // Computed
  const squareCounter = computed(() => counter.value * 2)

  // Functions
  const increment = () => counter.value++
  const decrement = () => counter.value--

  return {
    counter,
    squareCounter,
    increment,
    decrement
  }
}

export default useCounter

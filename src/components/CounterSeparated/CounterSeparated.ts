import { computed, ref, defineComponent } from 'vue'
import useCounter from '@/composables/useCounter'

export default defineComponent({
  name: 'CounterSeparated',
  props: {
    initialValue: {
      type: Number,
      required: true
    }
  },
  setup(props){
    const { counter, squareCounter, decrement, increment } = useCounter(props.initialValue)
    // const counter = ref(props.initialValue)
    // const squareCounter = computed(() => counter.value * 2)
    //
    // const increment = () => counter.value++
    // const decrement = () => counter.value--

    return {
      squareCounter,
      counter,
      increment,
      decrement
    }
  }
})

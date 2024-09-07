<template>
  <section>
    <h2>Counter Separated: {{counter}}</h2>
    <h3>Square counter: {{squareCounter}}</h3>
    <div>
      <button @click="increment">+1</button>
      <button @click="decrement">-1</button>
    </div>
  </section>
</template>

<script lang="ts" src="./CounterSeparated.ts"></script>
<style scoped src="./CounterSeparated.css"></style>



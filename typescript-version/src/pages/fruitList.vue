<script setup lang="ts">
import { computed, ref } from 'vue';
const fruits = ref<any[]>(['apple', 'banana', 'orange'])

const numFruits = computed(() => {
  return fruits.value.length
})
</script>

<template>
  <div>
    <ol>
      <li
        v-for="fruit in fruits"
        :key="fruit"
      >
      </li>
    </ol>
    <p>
      Number of fruits: {{ numFruits }}
    </p>
  </div>
</template>

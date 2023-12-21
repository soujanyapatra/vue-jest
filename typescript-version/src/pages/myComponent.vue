<script setup lang="ts">
import Item from '../components/item.vue';
</script>

<template>
  <div>
    {{ `Test component: its a parent one` }}
    <Item />
    <VCard id="jest-test-id">
      {{ `hello I am a card :)` }}
    </VCard>
  </div>
</template>

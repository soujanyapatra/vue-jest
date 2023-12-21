<script setup lang="ts">
import { defineProps } from 'vue';

interface Journey {
  from?: string
  to?: string
}

interface Ticket {
  title?: string
  price?: string
  journey?: Journey
}

interface Props {
  ticket?: Ticket
}

const props = defineProps<Props>()
</script>

<template>
  <!-- if there is no vuetify exist use your own component here or simple use div or span  -->
  <VCard>
    <VCardText>
      <VCardTitle v-if="props?.ticket?.title">
        {{ 'Ticket title' }}: {{ props?.ticket?.title }}
      </VCardTitle>
      <VCardSubTitle v-if="props?.ticket?.price">
        {{ 'Price is' }}: {{ props?.ticket?.price }}
      </VCardSubTitle>
      <VCardSubTitle v-if="props?.ticket?.journey?.from && props?.ticket?.journey?.to">
        {{ 'Journey from' }}: {{ props?.ticket?.journey?.from }} {{ 'to' }}: {{ props?.ticket?.journey?.to }}
      </VCardSubTitle>
      <VCardSubTitle v-if="props?.ticket?.title">
        {{ 'Are you excited' }}
      </VCardSubTitle>
    </VCardText>
  </VCard>
</template>

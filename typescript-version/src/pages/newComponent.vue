<script setup lang="ts">
import AutoComplete from 'primevue/autocomplete'
import 'primevue/resources/primevue.min.css'

import 'primevue/resources/themes/saga-blue/theme.css'

const value = ref<any>()
const items = ref<any[]>()
const date = new Date()
</script>

<template>
  <AutoComplete
    v-model="value"
    :suggestions="items"
  />
  <PCalender v-model="date" />
</template>

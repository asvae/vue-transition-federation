<template>
  <div id="vue2-app"/>
</template>

<script setup>
import { onMounted } from 'vue'

import main from 'remote_app/mainFederation.js'

console.log('main', main)

onMounted(() => {
  main.createVue2App('#vue2-app')
})
</script>


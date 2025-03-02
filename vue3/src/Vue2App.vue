<template>
  <div id="app-vue2"/>
</template>

<script setup>
import { onMounted } from 'vue'

import main from 'remote_app/mainFederation.js'

onMounted(() => {
  main.createVue2App('#app-vue2')
})
</script>

<style>

</style>


<template>
  <div id="app-vue2"/>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

import main from 'remote_app/mainFederation.js'

let routerVue2
const routerVue3 = useRouter()

const syncVue2Route = () => {
  if (routerVue3.currentRoute.value.path === routerVue2.currentRoute.path) {
    return
  }
  routerVue2?.push(routerVue3.currentRoute.value.path);
}
const syncVue3Route = () => {
  if (routerVue3.currentRoute.value.path === routerVue2.currentRoute.path) {
    return
  }
  routerVue3.push(routerVue2.currentRoute.path);
}

onMounted(() => {
  routerVue2 = main.createVue2App('#app-vue2', main.routes)

  syncVue2Route();

  routerVue3.afterEach(syncVue2Route)
  routerVue2?.afterEach(syncVue3Route)
})
</script>

<style>

</style>


<template>
  <div>
    <div id="app-vue2"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

import main from 'remote_app/mainFederation.js'

let routerVue2
const routerVue3 = useRouter()

const areRoutesInSync = () =>
  routerVue3.currentRoute.value.path === routerVue2.currentRoute.path

const syncVue2Route = () => {
  areRoutesInSync() || routerVue2?.push(routerVue3.currentRoute.value.path)
}
const syncVue3Route = () => {
  areRoutesInSync() || routerVue3.push(routerVue2.currentRoute.path)
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


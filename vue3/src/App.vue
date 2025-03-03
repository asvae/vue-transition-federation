<script setup>
import { useRoute } from 'vue-router'

const route = useRoute();
</script>

<template>
  <div id="app-vue3" style="background-color: #1a202c; color: white; min-height: 100vh; display: flex;">
    <!-- Sidebar -->
    <nav style="width: 33.333333%; background-color: black; padding: 1rem; display: flex; flex-direction: column;">
      <h2 class="text-lightgreen text-xl font-bold">Vue 3</h2>
      <ul class="space-y-2 mt-4">
        <li>
          <router-link
            to="/page1"
            class="block px-4 py-2 rounded text-white transition duration-300"
            :class="{ 'bg-gray-700': route.path === '/page1' }">
            Page 1
          </router-link>
        </li>
        <li>
          <router-link
            to="/page2"
            class="block px-4 py-2 rounded text-white transition duration-300"
            :class="{ 'bg-gray-700': route.path === '/page2' }">
            Page 2
          </router-link>
        </li>
        <li>
          <router-link
            to="/page3"
            class="block px-4 py-2 rounded text-white transition duration-300"
            :class="{ 'bg-gray-700': route.path === '/page3' }">
            Page 3
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Main Content -->
    <main class="w-2/3 p-6">
      <router-view />
    </main>
  </div>
</template>

<style scoped>

</style>

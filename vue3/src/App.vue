<script setup>

</script>

<template>
  <ul class="navbar-nav">
    <li class="nav-item">
      <router-link to="/user" class="nav-link">User</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/product" class="nav-link">Product</router-link>
    </li>
  </ul>
  <router-view/>
</template>

<style scoped>

</style>

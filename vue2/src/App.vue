<template>
  <div id="app-vue2" class="bg-dark text-white">
     <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
}
</script>

<style>
body {
  min-height: 100vh;
  display: flex;
  background-color: #343a40;
}
.sidebar {
  width: 250px;
  background-color: #212529;
  color: white;
}
.sidebar a {
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  display: block;
}
.sidebar a:hover {
  background-color: #343a40;
}
.nav-link.active {
  background-color: #495057;
}
</style>

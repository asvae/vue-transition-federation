<template>
  <div id="app-vue2" class="bg-dark text-white">
    <div class="container-fluid">
      <div class="row vh-100">
        <!-- Sidebar -->
        <nav class="col-4 bg-black d-flex flex-column p-3">
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link to="/page1" class="nav-link text-white" :class="{ 'bg-secondary active': $route.path === '/page1' }">
                Page 1
              </router-link>
            </li>
            <li>
              <router-link to="/page2" class="nav-link text-white" :class="{ 'bg-secondary active': $route.path === '/page2' }">
                Page 2
              </router-link>
            </li>
            <li>
              <router-link to="/page3" class="nav-link text-white" :class="{ 'bg-secondary active': $route.path === '/page3' }">
                Page 3
              </router-link>
            </li>
          </ul>
        </nav>

        <!-- Main Content -->
        <main class="col-8 p-4">
          <router-view/>
        </main>
      </div>
    </div>
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

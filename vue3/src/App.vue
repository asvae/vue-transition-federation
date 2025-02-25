<script setup>
</script>

<template>
  <body class="bg-gray-50 font-sans">

  <header class="bg-gradient-to-r from-indigo-500 to-purple-500 py-10">
    <div class="container mx-auto px-6">
      <h1 class="text-5xl font-bold text-white">Welcome to Our Awesome Product</h1>
      <p class="mt-4 text-xl text-indigo-100">Enhancing your experience with seamless design.</p>
      <button class="mt-8 px-6 py-2 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-indigo-50 transition">Get Started</button>
    </div>
  </header>

  <section class="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
    <div>
      <h2 class="text-3xl font-bold text-gray-800">About Our Product</h2>
      <p class="mt-4 text-gray-600">We strive to provide you with the best possible tools and services to enhance your productivity and creativity. Discover the future with us.</p>
    </div>
    <div class="rounded-lg shadow-xl overflow-hidden">
      <img src="https://source.unsplash.com/random/800x600?tech" alt="Tech Image">
    </div>
  </section>

  <section class="bg-white">
    <div class="container mx-auto px-6 py-12">
      <h2 class="text-3xl font-bold text-center text-gray-800">Why Choose Us?</h2>
      <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-4 bg-indigo-500 rounded-full flex items-center justify-center text-white text-2xl">🚀</div>
          <h3 class="font-semibold text-lg">Fast Performance</h3>
          <p class="text-gray-500 mt-2">Experience lightning-fast load times and seamless interactions.</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-4 bg-indigo-500 rounded-full flex items-center justify-center text-white text-2xl">🎨</div>
          <h3 class="font-semibold text-lg">Elegant Design</h3>
          <p class="text-gray-500 mt-2">Thoughtful designs crafted for intuitive user experiences.</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-4 bg-indigo-500 rounded-full flex items-center justify-center text-white text-2xl">🔒</div>
          <h3 class="font-semibold text-lg">Secure & Reliable</h3>
          <p class="text-gray-500 mt-2">Your data is safe with industry-leading security measures.</p>
        </div>
      </div>
    </div>
  </section>

  <footer class="bg-gray-100 py-6">
    <div class="container mx-auto px-6 text-center text-gray-600">
      © 2025 Awesome Company. All rights reserved.
    </div>
  </footer>

  </body>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

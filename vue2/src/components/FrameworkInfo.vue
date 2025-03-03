<template>
  <div
    class="container p-4 bg-dark-green"
    :class="{
      'bg-dark-green': vueVersion === 3,
      'bg-dark-brown': vueVersion === 2,
    }"
  >
    <div><strong>Vue:</strong> {{ vueVersion }}</div>
    <div><strong>Bootstrap:</strong> <span :class="bootstrapDetected ? 'text-success' : 'text-danger'">{{ bootstrapDetected ? 'Yes' : 'No' }}</span></div>
    <div><strong>Tailwind:</strong> <span :class="tailwindDetected ? 'text-success' : 'text-danger'">{{ tailwindDetected ? 'Yes' : 'No' }}</span></div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'FrameworkInfo',
  data() {
    return {
      vueVersion: +Vue.version.split('.')[0],
      bootstrapDetected: null,
      tailwindDetected: null,
    };
  },
  mounted () {
    this.bootstrapDetected = this.isBootstrapLoaded()
    this.tailwindDetected = this.isTailwindLoaded()
  },
  methods: {
    isBootstrapLoaded() {
      // Bootstrap applies 'd-none' as display: none
      const testElement = document.createElement('div');
      testElement.classList.add('d-none'); // 'd-none' is a Bootstrap-specific utility
      this.$el.appendChild(testElement);
      const isHidden = getComputedStyle(testElement).display === 'none';
      // this.$el.removeChild(testElement);
      return isHidden;
    },
    isTailwindLoaded() {
      // Tailwind applies 'hidden' as display: none
      const testElement = document.createElement('div');
      testElement.classList.add('hidden');
      this.$el.appendChild(testElement);
      const isHidden = getComputedStyle(testElement).display === 'none';
      // this.$el.removeChild(testElement);
      return isHidden;
    },
  },
};
</script>

<style scoped>
.text-success {
  color: #28a745;
}
.text-danger {
  color: #dc3545;
}
.bg-dark-green {
  background-color: #1b3d2f; /* Dark green for Vue 3 */
}
.bg-dark-brown {
  background-color: #3e2f1b; /* Dark brown for Vue 2 */
}
</style>

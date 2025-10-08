<script setup lang="ts">
// ES module imports - clean and modern!
// @ts-ignore - Workspace package import
import PageBuilder from 'react-builder';
// Import the CSS for the React builder
import 'react-builder/style.css';

function loadReactBuilder() {
  PageBuilder.render({
    containerId: "page-builder",
    onChange: (data: any) => {
      console.log("Data from React:", data);
    },
  });
}

// Tip: To auto-load on mount, uncomment this:
// import { onMounted } from 'vue';
// onMounted(() => {
//   loadReactBuilder();
// });
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div id="page-builder"></div>
  <button @click="loadReactBuilder">Load React Builder</button>
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

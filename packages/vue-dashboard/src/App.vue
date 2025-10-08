<script setup lang="ts">

function loadReactBuilder() {
  const script = document.createElement("script");
  script.src = "/react-builder/page-builder.umd.js"; // built React bundle path
  script.onload = () => {
    // @ts-ignore
    PageBuilder.render({
      containerId: "page-builder",
      onChange: (data: any) => {
        console.log("Data from React:", data);
      },
    });
  };
  document.body.appendChild(script);

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "/react-builder/page-builder.css";
  document.head.appendChild(link);
}
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

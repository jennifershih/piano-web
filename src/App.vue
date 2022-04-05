<script setup lang="ts"></script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="nav-link active navbar-brand mb-0 h1" href="/">
        <img src="@/assets/piano-icon.png" width="30" height="24" />
        Home</a
      >
      <a class="nav-link navbar-brand mb-0 h1" href="/piano">
        <img src="@/assets/piano-icon.png" width="30" height="24" />
        Piano</a
      >
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
@import "@/assets/styles.scss";
</style>

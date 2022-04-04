<script setup lang="ts"></script>

<template>
  <header>
    <img alt="Piano logo" class="logo" src="@/assets/piano-icon.png" />

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/piano">Piano</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style></style>

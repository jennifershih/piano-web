<template>
  <header>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <RouterLink to="/" class="navbar-brand">
          <img
            src="@/assets/piano-icon.png"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          Piano Web
        </RouterLink>
      </div>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer class="footer-copyright text-center">© 2022 Jennifer Shih</footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";

export default defineComponent({
  components: { RouterView, RouterLink },
});
</script>

<style lang="scss">
@import "@/assets/styles.scss";
</style>

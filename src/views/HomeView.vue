<template>
  <div class="container-fluid text-center">
    <h1>Piano Web</h1>
    <p>使用 Vue.js、Bootstrap 做出的線上鋼琴。</p>
    <p>用滑鼠來彈奏鋼琴，每個琴鍵會對應到不同的音調。</p>
    <RouterLink to="/piano" class="btn btn-lg btn-success">開始彈奏</RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  components: { RouterLink },
});
</script>

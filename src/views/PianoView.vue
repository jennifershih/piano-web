<template>
  <h1>This is a Piano page</h1>
  <button @click="unmute">Unmute</button>
  <Keyboard />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { start } from "tone";
import Keyboard from "@/components/Keyboard.vue";

export default defineComponent({
  components: { Keyboard },
  methods: {
    async unmute() {
      await start();
    },
  },
});
</script>

<style></style>

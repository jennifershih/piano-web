<template>
  <h1>This is a Piano page</h1>
  <button @click="unmute">Unmute</button>
  <Keyboard />
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import { start, Synth } from "tone";
import Keyboard from "@/components/Keyboard.vue";
import { synthInjectionKey } from "@/types/synth-injection-key";

export default defineComponent({
  components: { Keyboard },
  setup() {
    const synth = new Synth();
    provide(synthInjectionKey, synth);
    return { synth };
  },
  mounted() {
    this.synth.toDestination();
  },
  methods: {
    async unmute() {
      await start();
    },
  },
});
</script>

<style></style>

<template>
  <ControlPanel />
  <Keyboard />
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import { start, Synth } from "tone";
import Keyboard from "@/components/Keyboard.vue";
import ControlPanel from "@/components/ControlPanel.vue";
import { synthInjectionKey } from "@/types/synth-injection-key";

export default defineComponent({
  components: { Keyboard, ControlPanel },
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

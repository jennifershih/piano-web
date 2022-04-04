<template>
  <button
    v-on:click="play"
    :class="{ 'black-key': isBlack, 'white-key': !isBlack }"
  ></button>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { synthInjectionKey } from "@/types/synth-injection-key";

export default defineComponent({
  setup() {
    const synth = inject(synthInjectionKey);
    return { synth };
  },
  props: {
    isBlack: Boolean,
  },
  methods: {
    play() {
      this.synth?.triggerAttackRelease("c4", "8n");
    },
  },
});
</script>

<style scoped>
.black-key {
  width: 3em;
  height: 9em;
  color: white;
  background-color: black;
}

.white-key {
  width: 5em;
  height: 15em;
  color: black;
  background-color: white;
}
</style>

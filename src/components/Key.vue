<template>
  <button
    class="btn btn-sm btn-outline-dark"
    @mousedown="attack"
    @mouseup="release"
    :class="{ 'bg-dark text-light': isBlack, 'bg-light text-dark': !isBlack }"
  >
    {{ note }}
  </button>
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
    note: {
      type: String,
      required: true,
    },
  },
  computed: {
    isBlack() {
      return this.note.includes("#");
    },
  },
  methods: {
    attack() {
      this.synth?.triggerAttack(this.note);
    },
    release() {
      this.synth?.triggerRelease();
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.bg-dark {
  height: calc($keyboard-min-height * 8.9 / 14.1);
}
</style>

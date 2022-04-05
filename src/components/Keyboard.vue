<template>
  <div class="card">
    <div class="card-body d-flex overflow-auto">
      <Key :note="`A0`" />
      <Key :note="`A#0`" />
      <Key :note="`B0`" />
      <Octave :number="1" />
      <Octave :number="2" />
      <Octave :number="3" />
      <Octave :number="4" />
      <Octave :number="5" />
      <Octave :number="6" />
      <Octave :number="7" />
      <Key :note="`C8`" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Octave from "./Octave.vue";
import Key from "./Key.vue";

export default defineComponent({
  components: { Octave, Key },
});
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.card-body {
  min-height: $keyboard-min-height;
}
</style>

<template>
  <div>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Octave from "./Octave.vue";
import Key from "./Key.vue";

export default defineComponent({
  components: { Octave, Key },
});
</script>

<style scoped>
div {
  display: flex;
}
</style>

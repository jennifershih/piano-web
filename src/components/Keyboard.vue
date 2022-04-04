<template>
  <div>
    <Key />
    <Key :is-black="true" />
    <Key />
    <Octave />
    <Octave />
    <Octave />
    <Octave />
    <Octave />
    <Octave />
    <Octave />
    <Key />
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

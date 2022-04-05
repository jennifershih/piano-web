<template>
  <Key :note="`C${number}`" />
  <Key :note="`C#${number}`" />
  <Key :note="`D${number}`" />
  <Key :note="`D#${number}`" />
  <Key :note="`E${number}`" />
  <Key :note="`F${number}`" />
  <Key :note="`F#${number}`" />
  <Key :note="`G${number}`" />
  <Key :note="`G#${number}`" />
  <Key :note="`A${number}`" />
  <Key :note="`A#${number}`" />
  <Key :note="`B${number}`" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Key from "./Key.vue";

export default defineComponent({
  components: {
    Key,
  },
  props: {
    number: {
      type: Number,
      required: true,
    },
  },
});
</script>

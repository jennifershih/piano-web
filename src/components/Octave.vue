<template>
  <Key />
  <Key :is-black="true" />
  <Key />
  <Key :is-black="true" />
  <Key />
  <Key />
  <Key :is-black="true" />
  <Key />
  <Key :is-black="true" />
  <Key />
  <Key :is-black="true" />
  <Key />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Key from "./Key.vue";

export default defineComponent({
  components: {
    Key,
  },
});
</script>

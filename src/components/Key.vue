<template>
  <button
    v-on:click="play"
    :class="{ 'black-key': isBlack, 'white-key': !isBlack }"
  ></button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    isBlack: Boolean,
  },
  methods: {
    play: function () {
      console.log("play");
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

<template>
  <div class="card">
    <div class="card-body">
      <button class="btn btn-success me-2" @click="play" :disabled="playing">
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { start } from "tone";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      playing: false,
    };
  },
  methods: {
    async play() {
      if (this.playing === true) return;

      this.playing = true;
      await start();
    },
  },
  computed: {
    buttonText() {
      if (this.playing === true) return "playing...";

      return "play";
    },
  },
});
</script>

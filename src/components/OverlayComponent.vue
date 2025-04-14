<script setup>
import CrossIcon from "@/assets/icons/CrossIcon.vue";
import { useMovieStore } from "@/store/movieStore";

const movieStore = useMovieStore();
</script>

<template>
  <div class="overlay" @click="movieStore.toggleMovieCard()">
    <CrossIcon class="cross-icon" />
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;

  z-index: 15;

  display: flex;
  justify-content: center;
  align-items: center;

  backdrop-filter: brightness(0.3) blur(2px);

  height: 100%;
  width: 100%;

  cursor: pointer;
}

.overlay:hover > .cross-icon {
  transform: scale(106%);
  transition: 200ms ease-in-out;
  color: white;
}

.cross-icon {
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>

<script setup>
import NotFoundImageIcon from "@/assets/icons/NotFoundImageIcon.vue";
import { useMovieStore } from "@/store/movieStore";

const movieStore = useMovieStore();

const movie = movieStore.selectedMovie;

function normalizeRating(rating) {
  if (rating) {
    return Math.round(rating * 10) / 10;
  }
  return "?";
}
</script>

<template>
  <span class="rating">
    {{ normalizeRating(movie.rating.kp) }}
  </span>
  <img
    class="image"
    v-if="movie.poster.url"
    :src="movie.poster.url"
    :alt="movie.name"
  />
  <NotFoundImageIcon v-else class="alt-poster" />
</template>

<style scoped>
.rating {
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 5px;
  padding-bottom: 2px;

  height: 40px;
  aspect-ratio: 1;

  border: 2px solid green;

  border-radius: 50%;
  background-color: var(--navigator-color);
}

.image {
  height: 100%;
  min-height: 450px;
}

.alt-poster {
  height: 100%;
  width: 300px;
}

@media (max-width: 768px) {
  .image {
    display: none;
  }
}
</style>

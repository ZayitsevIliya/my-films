<script setup>
import MoviePreview from "@/components/movieCard/MoviePreview.vue";
import MovieCard from "@/components/movieCard/MovieCard.vue";
import Overlay from "@/components/OverlayComponent.vue";
import { useMovieStore } from "@/store/movieStore";
import { computed } from "vue";

const movieStore = useMovieStore();

const category = computed(() => movieStore.currentMovieListCategory);

function selectMovie(movie) {
  movieStore.toggleMovieCard();
  movieStore.selectedMovie = movie;
}
</script>

<template>
  <Overlay v-if="movieStore.isMovieSelected" />
  <div class="movie-list">
    <MoviePreview
      v-for="movie of movieStore[category]"
      :key="movie.id"
      :movie="movie"
      @click.prevent="selectMovie(movie)"
    />
    <MovieCard v-if="movieStore.isMovieSelected" />
  </div>
</template>

<style scoped>
.movie-list {
  display: flex;
  flex-wrap: wrap;

  width: 96%;

  margin-left: auto;
  margin-right: auto;
}
</style>

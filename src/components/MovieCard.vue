<script setup>
import MovieCardPoster from "@/components/MovieCardPoster.vue";
import MovieCardButtons from "@/components/MovieCardButtons.vue";
import { useMovieStore } from "@/store/movieStore";

const movieStore = useMovieStore();

const movie = movieStore.selectedMovie;
</script>

<template>
  <div class="movie-card">
    <MovieCardPoster />
    <main>
      <h1 class="title">{{ movie.name || "..." }}</h1>

      <p class="discription">
        {{ movie.description }}
      </p>

      <MovieCardButtons />
    </main>
  </div>
</template>

<style scoped>
.movie-card {
  position: fixed;

  margin-inline: auto;

  inset-inline: 0;
  inset-block-start: 10%;

  display: flex;
  z-index: 20;

  width: 60%;
  min-width: 650px;
  aspect-ratio: 1/0.7;

  background-color: black;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;

  padding: 10px;
}

.title {
  width: 100%;
  text-align: center;
}

.discription {
  height: 100%;

  margin-top: 5%;

  text-overflow: ellipsis;
  white-space: wrap;
  overflow-y: scroll;
}

.discription::-webkit-scrollbar {
  width: 1px;
  background-color: black;
}

.discription::-webkit-scrollbar-thumb {
  background-color: white;
}

@media (max-width: 768px) {
  .movie-card {
    min-width: 320px;
    height: 400px;
  }

  .image {
    display: none;
  }
}
</style>

<script setup>
import { NAV_LIST } from "@/constants";
import BaseButton from "@/components/BaseButton.vue";
import { computed } from "vue";
import { useMovieStore } from "@/store/movieStore";
import { useMovieCardButtonsActions } from "@/composables/useMovieCardButtonsActions";

// Добавить функцию добавления количества просмотров

const { categoryButtonAction } = useMovieCardButtonsActions();

const movieStore = useMovieStore();

const currentMovie = computed(
  () =>
    movieStore.findMovieById(movieStore.selectedMovie.id) ??
    movieStore.selectedMovie
);

function activeCategory(movie, category) {
  return movie.category?.includes(category);
}
</script>

<template>
  <div class="buttons">
    <BaseButton
      v-for="categoryName in NAV_LIST"
      :key="categoryName"
      :class="[
        { 'button-highlight': activeCategory(currentMovie, categoryName) },
      ]"
      @click="categoryButtonAction(currentMovie, categoryName)"
    >
      {{ categoryName }}
    </BaseButton>
  </div>
</template>

<style scoped>
.button-highlight {
  background-color: var(--blue-color);
}

.buttons {
  display: flex;

  height: 12%;
}
</style>

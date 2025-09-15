<script setup>
import TheSearch from "@/components/TheSearch.vue";
import TheNavigator from "@/components/navigation/TheNavigator.vue";
import TheMovieList from "@/components/TheMovieList.vue";
import { useMovieStore } from "@/store/movieStore";
import AnimatedLoader from "@/components/AnimatedLoader.vue";
import { navList } from "@/config/navigator.config";
import { computed } from "vue";

const movieStore = useMovieStore();

function setMoviesCategory(moviesListName) {
  movieStore.changeCurrentMovieListCategory(moviesListName);
}

const activeNavItem = computed(() => {
  return movieStore.currentMovieListCategory;
});
</script>

<template>
  <div class="main-container">
    <div class="content">
      <TheSearch />
      <AnimatedLoader v-if="movieStore.loaderState" />
      <TheMovieList />
    </div>
    <TheNavigator
      :nav-list="navList"
      :active-nav-item="activeNavItem"
      @nav-item-click="setMoviesCategory"
    />
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: row-reverse;
  max-width: 100%;
  min-width: 320px;

  background-color: var(--main-color);
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: 90vh;
}

@media (max-width: 768px) {
  .main-container {
    display: block;
  }
}
</style>

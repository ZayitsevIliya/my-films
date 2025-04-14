<script setup>
import TheWatchedIcon from "@/assets/icons/TheWatchedIcon.vue";
import TheWishItemIcon from "@/assets/icons/TheWishItemIcon.vue";
import TheExpectedIcon from "@/assets/icons/TheExpectedIcon.vue";
import TheFavoriteIcon from "@/assets/icons/TheFavoriteIcon.vue";
import NavItem from "@/components/NavItem.vue";
import { useMovieStore } from "@/store/movieStore";

import {
  APP_TITLE,
  WISH_LIST,
  EXPECTED_LIST,
  WATCHED_LIST,
  FAVORITE_LIST,
} from "@/constants";

const navList = {
  [WISH_LIST]: TheWishItemIcon,
  [EXPECTED_LIST]: TheExpectedIcon,
  [WATCHED_LIST]: TheWatchedIcon,
  [FAVORITE_LIST]: TheFavoriteIcon,
};

const movieStore = useMovieStore();

function setMoviesCategory(moviesListName) {
  movieStore.changeCurrentMovieListCategory(moviesListName);
}
</script>

<template>
  <div class="navigator">
    <h1>
      {{ APP_TITLE }}
    </h1>
    <NavItem
      v-for="(icon, name) of navList"
      :key="name"
      :name="name"
      :icon="icon"
      @click="setMoviesCategory(name)"
    />
  </div>
</template>

<style scoped>
.navigator {
  position: sticky;
  top: 0;
  z-index: 10;

  display: flex;
  flex-direction: column;
  gap: 8%;

  min-width: 230px;
  height: 100vh;

  background-color: var(--navigator-color);
}

h1 {
  display: flex;
  justify-content: center;

  padding-top: 5%;

  font-size: 3.2rem;

  cursor: default;
}

@media (max-width: 768px) {
  .navigator {
    position: sticky;
    bottom: 0;
    z-index: 10;

    flex-direction: row;
    gap: 0;

    height: 10vh;
    min-height: 50px;
  }

  h1 {
    display: none;
  }
}
</style>

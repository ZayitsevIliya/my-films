<script setup>
import NotFoundImageIcon from "@/assets/icons/NotFoundImageIcon.vue";

defineProps(["movie"]);
</script>

<template>
  <a href="#">
    <div class="poster">
      <img v-if="movie.poster?.url" :src="movie.poster.url" :alt="movie.name" />
      <NotFoundImageIcon v-else class="alt-poster" />
    </div>
    <span class="title">{{ movie.name || "..." }}</span>
  </a>
</template>

<style scoped>
a {
  display: flex;
  flex-direction: column;

  width: 16.66%;

  padding: 10px;
  margin-bottom: 30px;

  font-size: larger;
}

a:hover {
  position: relative;
  color: white;
}

a:hover img {
  transform: scale(102%);
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
}

.poster {
  flex-grow: 1;
}

img {
  height: 100%;
  width: 100%;
}

.alt-poster {
  height: 100%;
  width: 100%;
}

.title {
  height: 50px;
  margin-top: 5px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: wrap;
  overflow: hidden;
}

@media (max-width: 1440px) {
  a {
    width: 20%;
  }
}

@media (max-width: 1024px) {
  a {
    width: 25%;
  }
}

@media (max-width: 425px) {
  a {
    width: 33.3%;
  }
}

@media (max-width: 320px) {
  a {
    width: 50%;
  }
}
</style>

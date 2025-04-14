<script setup>
import { ref } from "vue";
import { movieSearch } from "@/movieSearch";

// Довать кнопку для всплываюбщего меню
// В меню должны быть чекбоксы для вариантов поиска и сортировки
// по названию, жанру, году

let enteredName = ref("");

function startSearch() {
  movieSearch(enteredName.value);
  enteredName.value = "";
}
</script>

<template>
  <form class="search" @submit.prevent="startSearch()">
    <input v-model="enteredName" type="text" placeholder="Movie..." />
  </form>
</template>

<style scoped>
.search {
  position: sticky;
  top: 0;
  z-index: 10;

  width: 100%;
  height: 80px;

  background: linear-gradient(
    180deg,
    rgba(20, 20, 23, 1) 0%,
    rgba(20, 20, 23, 0.5) 60%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(1px);

  display: flex;
  justify-content: center;
  align-items: center;
}

input {
  padding: 1rem;

  border-radius: 8px;

  width: 40%;
  min-width: 300px;

  height: 50%;

  color: black;
  font-size: 1.2rem;

  outline: none;
}
</style>

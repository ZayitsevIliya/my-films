<script setup>
import TheMainPage from "@/components/TheMainPage.vue";
import { useStorage } from "@/composables/useStorage";
import { onBeforeMount } from "vue";

const { saveMovieList, loadMovieList } = useStorage();

addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    saveMovieList();
  }
});

onBeforeMount(() => loadMovieList());
</script>

<template>
  <TheMainPage />
</template>

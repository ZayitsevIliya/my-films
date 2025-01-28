<script setup>
import MainPage from "@/components/MainPage.vue";
import SideBar from "@/components/SideBar.vue";
</script>

<template>
  <div class="content">
    <SideBar />
    <MainPage />
  </div>
</template>

<style scoped>
.content {
  display: flex;
}
</style>

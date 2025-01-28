<script setup>
import TheTitle from "@/components/TheTitle.vue";
import TheNavigator from "@/components/TheNavigator.vue";
</script>

<template>
  <div class="side-bar">
    <TheTitle />
    <TheNavigator />
  </div>
</template>

<style>
.side-bar {
  background-color: #201e25;
  width: 22rem;
  height: 100vh;
}

@media (max-width: 768px) {
  .side-bar {
    width: 5rem;
  }
}
</style>

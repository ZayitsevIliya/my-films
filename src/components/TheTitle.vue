<script setup>
import TheTitleIcon from "@/assets/icons/TheTitleIcon.vue";
</script>

<template>
  <div class="title">
    <h1>
      <a href="#">
        <span class="title-text">My films</span>
        <TheTitleIcon class="title-icon" />
      </a>
    </h1>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  justify-content: center;
}

h1 {
  font-size: 3rem;
}

a {
  display: flex;
  align-items: center;
}

span:hover {
  color: white;
}

.title-icon {
  width: 3rem;
}

@media (max-width: 768px) {
  .title-text {
    display: none;
  }
}
</style>

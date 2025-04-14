<script setup>
import { useMovieStore } from "@/store/movieStore";

const movieStore = useMovieStore();

function isCurrentNavItem(navItem) {
  return navItem == movieStore.currentMovieListCategory;
}

defineProps(["name", "icon"]);
</script>

<template>
  <div :class="['nav-item', { 'current-nav-item': isCurrentNavItem(name) }]">
    <a :href="`#${name}`">
      <component class="icon" :is="icon" />
      <span>{{ name }}</span>
    </a>
  </div>
</template>

<style scoped>
.nav-item:hover {
  background-color: #14141733;

  transition: 200ms;
}

a {
  display: flex;
  align-items: center;
  gap: 8px;

  height: 70px;

  font-size: 1.3rem;
  text-transform: capitalize;

  margin-left: 10%;
}

a:hover > * {
  color: white;
}

.current-nav-item {
  background-color: #141417;
  transition: background-color 100ms;

  pointer-events: none;
}

.current-nav-item * {
  color: white;
}

.icon {
  width: 36px;
  height: 36px;

  min-width: 36px;

  color: var(--blue-color);
}

@media (max-width: 768px) {
  span {
    display: none;
  }

  .nav-item {
    width: 100%;
    height: 100%;
  }

  .nav-item:hover {
    background-color: #14141733;

    transition: 200ms;
  }

  a {
    justify-content: center;

    margin-left: 0;

    height: 100%;
  }
}
</style>

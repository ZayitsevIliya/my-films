<script setup>
import { computed } from "vue";

const props = defineProps(["name", "icon", "activeNavItem"]);

const classes = computed(() => {
  return props.activeNavItem == props.name ? "active-nav-item" : "nav-item";
});
</script>

<template>
  <a :href="`#${name}`" :class="classes">
    <component class="icon" :is="icon" />
    <span>{{ name }}</span>
  </a>
</template>

<style scoped>
a {
  height: 70px;

  padding-left: 10%;

  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 1.3rem;
  text-transform: capitalize;
}

a:hover > * {
  color: white;
}

.active-nav-item * {
  color: white;
}

.active-nav-item {
  background-color: #141417;
  transition: background-color 100ms;

  pointer-events: none;
}

.nav-item:hover {
  background-color: #14141733;

  transition: 200ms;
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
    height: 100%;

    margin-left: 0;

    justify-content: center;
  }
}
</style>

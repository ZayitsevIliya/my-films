<script setup>
import NavItem from "@/components/navigation/NavItem.vue";

const props = defineProps(["navList", "activeNavItem"]);
defineEmits(["navItemClick"]);
</script>

<template>
  <div class="navigator">
    <NavItem
      v-for="{ label, icon } of props.navList"
      :key="label"
      :name="label"
      :icon="icon"
      :active-nav-item="activeNavItem"
      @click="$emit('navItemClick', label)"
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
  justify-content: center;
  gap: 10%;

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

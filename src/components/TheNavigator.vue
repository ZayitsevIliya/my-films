<script setup>
import TheWatchedIcon from "@/assets/icons/TheWatchedIcon.vue";
import TheWishItemIcon from "@/assets/icons/TheWishItemIcon.vue";
import TheExpectedIcon from "@/assets/icons/TheExpectedIcon.vue";

const navList = {
  Wishlist: TheWishItemIcon,
  Expected: TheExpectedIcon,
  Watched: TheWatchedIcon,
};
</script>
<template>
  <div class="navigator">
    <div class="nav-item" v-for="(icon, item) of navList" :key="item">
      <a href="#">
        <component class="icon" :is="icon"></component>
        <span class="nav-item-text">
          {{ item }}
        </span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.navigator {
  height: 50%;

  display: flex;
  flex-direction: column;
  gap: 15%;

  margin-top: 6rem;
  margin-left: 2rem;
}
.icon {
  width: 2.2rem;
  height: 2.2rem;
}

a {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 2rem;
}

span:hover {
  color: white;
}

@media (max-width: 768px) {
  .nav-item-text {
    display: none;
  }

  .navigator {
    margin-left: 0;
  }

  .nav-item {
    display: flex;
    justify-content: center;
  }
}
</style>

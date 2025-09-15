<script setup>
import { navData } from "@/config/navigator.config";
</script>

<template>
  <h1>Test</h1>
  <div>result: {{ navData.number }}</div>
</template>
<style scoped>
* {
  color: black;
  font-size: 36px;
}
</style>

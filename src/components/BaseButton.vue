<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  width: 100%;
  height: 100%;

  border-radius: 5px;
  border: 3px solid;
  background-color: var(--text-color);

  text-transform: capitalize;

  cursor: pointer;
}

button:hover {
  filter: brightness(120%);
}

button:active {
  background-color: var(--text-color);
}
</style>

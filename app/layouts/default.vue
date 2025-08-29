<script setup lang="ts">
</script>
<template>
  <div class="layout-container">
    <AppHeader />
    <div id="main-content" class="main-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.layout-container {
  height: 100dvh;
  background-color: var(--background-color-default);
}

.main-content {
  height: calc(100% - 4rem);
  overflow-y: auto;
  transform: translateY(4rem);
}
</style>
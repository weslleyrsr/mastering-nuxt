<template>
  <div class="layout-container">
    <div id="main-content" class="main-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.layout-container {
  height: calc(100vh - 4rem);
  background-color: var(--background-color-default);
}

.main-content {
  height: 100%;
  overflow-y: auto;
  margin-top: 4rem;
}
</style>

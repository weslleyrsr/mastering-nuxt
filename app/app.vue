<script setup lang="ts">
const config = useRuntimeConfig();
console.log("Runtime Config:", config);
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

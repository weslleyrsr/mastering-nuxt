<script setup lang="ts">
const configs = useRuntimeConfig();

console.log("App Config", configs);
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

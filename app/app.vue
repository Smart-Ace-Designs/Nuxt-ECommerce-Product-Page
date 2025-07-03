<script setup lang="ts">
useState("cartCounter", () => 0);
useState("cartContents", (): CartItem[] => []);
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

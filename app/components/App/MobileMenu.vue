<script lang="ts" setup>
defineEmits(["close"]);
</script>

<template>
  <div class="h-full w-full transition-opacity">
    <div class="bg-theme-white absolute left-0 top-0 z-10 h-screen w-2/3 p-6">
      <button class="absolute left-6 top-6 cursor-pointer" @click="$emit('close')">
        <img src="/icon-close.svg" alt="Close menu" class="size-4" />
      </button>
      <nav class="mt-12">
        <AppMobileNavList />
      </nav>
    </div>
  </div>
</template>

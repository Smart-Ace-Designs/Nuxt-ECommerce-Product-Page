<script lang="ts" setup>
defineEmits(["close"]);
</script>

<template>
  <div class="h-full w-full transition-opacity">
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-menu-title"
      class="bg-theme-white absolute left-0 top-0 z-10 h-screen w-2/3 p-6"
      tabindex="-1"
    >
      <h2 id="mobile-menu-title" class="sr-only">Mobile navigation menu</h2>
      <button
        class="absolute left-6 top-6 cursor-pointer"
        type="button"
        @click="$emit('close')"
        aria-label="Close navigation menu"
      >
        <img src="/icon-close.svg" alt="Close menu" class="size-4" />
      </button>
      <nav class="mt-12">
        <AppMobileMenuNav @close="$emit('close')" />
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
const navItems = [
  { label: "Collections", href: "/" },
  { label: "Men", href: "/" },
  { label: "Women", href: "/" },
  { label: "About", href: "/" },
  { label: "Contact", href: "/" },
];

defineEmits(["close"]);
</script>

<template>
  <nav aria-label="Main navigation" role="navigation">
    <ul class="flex flex-col gap-3">
      <li v-for="item in navItems" :key="item.label" class="relative cursor-pointer">
        <NuxtLink
          :to="item.href"
          :aria-label="`Navigate to ${item.label} section`"
          @click="$emit('close')"
          class="text-theme-very-dark-blue text-md hover:text-theme-orange font-semibold transition-colors duration-300 ease-in-out"
        >
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

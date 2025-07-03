<script setup lang="ts">
import type { Product } from "@@/shared/types/Product";

defineProps<{
  product?: Product;
}>();
</script>

<template>
  <h2 class="text-theme-dark-grayish-blue text-sm font-semibold uppercase">
    {{ product?.brand }}
  </h2>
  <h1 class="text-theme-very-dark-blue leading-12 text-[2.85rem] font-bold">
    {{ product?.name }}
  </h1>
  <p class="text-theme-dark-grayish-blue">
    {{ product?.description }}
  </p>
  <div class="flex items-center gap-4">
    <span class="text-theme-very-dark-blue text-3xl font-bold">${{ product?.price }}</span>
  </div>
  <p class="text-theme-dark-grayish-blue font-semibold line-through">
    ${{ product?.originalPrice }}
  </p>
</template>

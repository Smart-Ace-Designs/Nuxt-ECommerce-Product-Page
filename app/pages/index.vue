<script setup lang="ts">
import type { Product } from "@@/shared/types/Product";
import productDetails from "@@/data/products.json";

// Assumes future conversion to dynamic route with ID passed as a route parameter
// Hard coded as "1" for demonstration purposes
const product = computed(() => productDetails.find((p) => p.id === 1)) as ComputedRef<
  Product | undefined
>;
const images = computed(() => product.value?.images ?? []);
</script>

<template>
  <main>
    <div class="gap-33 py-22 grid grid-cols-2 px-12">
      <AppProductGallery :imageList="images" v-if="images.length" />
      <AppProductDetails :product="product" />
    </div>
  </main>
</template>

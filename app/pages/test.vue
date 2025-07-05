<script setup lang="ts">
definePageMeta({
  layout: false,
});
import productDetails from "@@/data/products.json";

const productId = 1;
const product = computed(() => productDetails.find((p) => p.id === productId)) as ComputedRef<
  Product | undefined
>;
const images = computed(() => product.value?.images ?? []);
</script>

<template>
  <AppLightbox :imageList="images" />
</template>

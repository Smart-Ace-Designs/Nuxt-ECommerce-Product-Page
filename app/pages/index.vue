<script setup lang="ts">
import productDetails from "@@/data/products.json";

const productId = 1;
const product = computed(() => productDetails.find((p) => p.id === productId)) as ComputedRef<
  Product | undefined
>;
const images = computed(() => product.value?.images ?? []);
</script>

<template>
  <main>
    <div class="gap-33 py-22 grid grid-cols-2 px-12">
      <AppProductGallery :imageList="images" v-if="images.length" />
      <div class="my-auto flex flex-col gap-5">
        <AppProductDetails :product="product" />
        <AppCart :productId="productId" />
      </div>
    </div>
  </main>
</template>

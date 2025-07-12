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
    <div class="md:py-22 grid grid-cols-1 gap-8 py-4 md:grid-cols-2 md:gap-32 md:px-12">
      <AppProductGallery :imageList="images" />
      <section class="my-auto flex flex-col gap-5 px-8 md:px-0">
        <AppProductDetails :product="product" />
        <AppCart :productId="productId" />
      </section>
    </div>
  </main>
</template>

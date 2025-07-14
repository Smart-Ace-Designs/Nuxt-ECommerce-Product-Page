<script setup lang="ts">
import productDetails from "@@/data/products.json";

const productId = 1;
const product = computed(() => productDetails.find((p) => p.id === productId)) as ComputedRef<
  Product | undefined
>;
const images = computed(() => product.value?.images ?? []);
</script>

<template>
  <main role="main">
    <section
      class="md:mt-22 mx-auto max-w-5xl sm:mt-11 sm:grid sm:grid-cols-2 sm:gap-8 sm:px-10 md:gap-16 lg:gap-32"
      role="region"
      aria-label="Product showcase"
    >
      <AppProductGallery :imageList="images" :productName="product?.name!" />
      <div
        class="my-auto flex flex-col gap-3 px-6 md:px-0 lg:gap-7"
        role="region"
        aria-label="Product details"
      >
        <AppProductDetails :product="product" />
        <AppCartItemsControl :productId="productId" />
      </div>
    </section>
  </main>
</template>

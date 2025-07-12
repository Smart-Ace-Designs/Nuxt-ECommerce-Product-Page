<script setup lang="ts">
const props = defineProps<{
  product?: Product;
}>();

const discountDisplay = computed(() => {
  return props.product?.discount ? `${props.product.discount * 100}%` : "0%";
});

const discountPrice = computed(() => {
  const originalPrice = parseFloat(props.product?.price || "0");
  const discount = props.product?.discount || 0;
  return (originalPrice * (1 - discount)).toFixed(2);
});
</script>

<template>
  <div role="article" aria-label="Product Details" class="space-y-4">
    <h2 class="text-theme-dark-grayish-blue text-sm font-semibold uppercase" aria-label="Brand">
      {{ product?.brand }}
    </h2>
    <h1
      class="text-theme-very-dark-blue leading-12 text-[2.85rem] font-bold"
      aria-label="Product Name"
    >
      {{ product?.name }}
    </h1>
    <p class="text-theme-dark-grayish-blue" aria-label="Product Description">
      {{ product?.description }}
    </p>
    <div class="flex items-center gap-4">
      <span class="text-theme-very-dark-blue text-3xl font-bold">${{ discountPrice }}</span>
      <span
        class="bg-theme-very-dark-blue rounded-md px-2 py-1 font-medium text-white"
        aria-label="Discount Percentage"
        >{{ discountDisplay }}</span
      >
    </div>
    <p class="text-theme-dark-grayish-blue font-semibold line-through" aria-label="Original Price">
      ${{ product?.price }}
    </p>
  </div>
</template>

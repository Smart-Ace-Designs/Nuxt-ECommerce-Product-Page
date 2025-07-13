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
  <div role="article" aria-label="Product Details" class="space-y-6">
    <h2
      class="text-theme-dark-grayish-blue mb-4 text-xs font-bold uppercase tracking-[.175em]"
      aria-label="Brand"
    >
      {{ product?.brand }}
    </h2>
    <h1
      class="text-theme-very-dark-blue md:leading-12 mb-10 text-[1.75rem] font-bold leading-8 md:text-[2.8rem]"
      aria-label="Product Name"
    >
      {{ product?.name }}
    </h1>
    <p class="text-theme-dark-grayish-blue" aria-label="Product Description">
      {{ product?.description }}
    </p>
    <div class="flex items-center gap-4 lg:flex-col lg:items-start">
      <div class="flex items-center gap-4">
        <span class="text-theme-very-dark-blue text-2xl font-bold lg:text-3xl"
          >${{ discountPrice }}</span
        >
        <span
          class="bg-theme-very-dark-blue rounded-md px-2 py-1 font-medium text-white"
          aria-label="Discount Percentage"
          >{{ discountDisplay }}</span
        >
      </div>
      <p
        class="text-theme-dark-grayish-blue mt-2 font-semibold line-through lg:mt-0"
        aria-label="Original Price"
      >
        ${{ product?.price }}
      </p>
    </div>
  </div>
</template>

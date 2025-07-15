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
  <div role="article" aria-label="Product Details" class="space-y-6" aria-live="polite">
    <h2
      class="text-theme-dark-grayish-blue mb-3 text-xs font-bold uppercase tracking-[.175em] lg:mb-4"
    >
      {{ product?.brand }}
    </h2>
    <h1
      class="text-theme-very-dark-blue md:leading-12 text-[1.75rem] font-bold leading-8 md:text-[2.8rem] lg:mb-10"
    >
      {{ product?.name }}
    </h1>
    <p class="text-theme-dark-grayish-blue text-md sm:text-base">
      {{ product?.description }}
    </p>
    <div class="flex items-center gap-4 sm:flex-col sm:items-start">
      <div class="flex items-center gap-4">
        <span
          class="text-theme-very-dark-blue text-3xl font-bold"
          :aria-label="`Current price: $${discountPrice}`"
          >${{ discountPrice }}</span
        >
        <span
          class="bg-theme-very-dark-blue text-md rounded-md px-3 py-1 font-semibold text-white lg:text-base"
          :aria-label="`Discount: ${discountDisplay}`"
          :aria-hidden="discountDisplay === '0%'"
          >{{ discountDisplay }}</span
        >
      </div>
      <p
        class="text-theme-dark-grayish-blue ml-auto font-bold line-through sm:ml-0"
        :aria-label="`Original price: $${product?.price}`"
        :aria-hidden="!product?.discount"
      >
        ${{ product?.price }}
      </p>
    </div>
  </div>
</template>

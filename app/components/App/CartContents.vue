<script lang="ts" setup>
const cartCounter = useState<number>("cartCounter");
</script>

<template>
  <div class="w-[360px] rounded-xl bg-white p-6 shadow-[0_20px_50px_0_rgba(29,32,38,0.15)]">
    <h2 class="text-theme-very-dark-blue mb-6 text-lg font-bold">Cart</h2>
    <hr class="border-theme-grayish-blue/30 mb-6" />
    <div
      v-if="cartCounter === 0"
      class="text-theme-dark-grayish-blue py-16 text-center font-semibold"
    >
      Your cart is empty.
    </div>
    <div v-else class="flex flex-col gap-6">
      <div class="flex items-center gap-4">
        <img
          src="/image-product-1-thumbnail.jpg"
          alt="Fall Limited Edition Sneakers"
          class="size-14 rounded-md"
        />
        <div class="flex-1">
          <p class="text-theme-dark-grayish-blue text-sm">Fall Limited Edition Sneakers</p>
          <div class="flex items-center gap-2 text-sm">
            <span class="text-theme-grayish-blue">$125.00</span>
            <span class="text-theme-grayish-blue">x</span>
            <span class="text-theme-grayish-blue">3</span>
            <span class="text-theme-very-dark-blue ml-2 font-bold">$375.00</span>
          </div>
        </div>
        <button class="p-1 transition hover:opacity-70">
          <img src="/icon-delete.svg" alt="Remove from cart" />
        </button>
      </div>
      <button
        class="bg-theme-orange mt-2 w-full rounded-lg py-4 font-bold text-white transition hover:bg-orange-400"
      >
        Checkout
      </button>
    </div>
  </div>
</template>

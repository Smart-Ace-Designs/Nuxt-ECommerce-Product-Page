<script lang="ts" setup>
import productDetails from "@@/data/products.json";

const cartContents = useState<CartItem[]>("cartContents");
const product = (id: number) => productDetails.find((p) => p.id === id) as Product | undefined;
const discountPrice = (item: CartItem) => {
  const productItem = product(item.id);
  if (!productItem) return "0.00";
  const originalPrice = parseFloat(productItem.price);
  const discount = productItem.discount || 0;
  return (originalPrice * (1 - discount)).toFixed(2);
};
const totalPrice = (item: CartItem) => {
  const price = discountPrice(item);
  return (parseFloat(price) * item.quantity).toFixed(2);
};
</script>

<template>
  <div class="w-[360px] rounded-xl bg-white p-6 shadow-[0_20px_50px_0_rgba(29,32,38,0.15)]">
    <h2 class="text-theme-very-dark-blue mb-6 text-lg font-bold">Cart</h2>
    <hr class="border-theme-grayish-blue/30 mb-6" />
    <div
      v-if="cartContents.length === 0"
      class="text-theme-dark-grayish-blue py-16 text-center font-semibold"
    >
      Your cart is empty.
    </div>
    <div v-else class="flex flex-col gap-6">
      <div class="flex items-center gap-4" v-for="item in cartContents" :key="item.id">
        <img
          :src="product(item.id)?.images[0]?.thumbnail"
          :alt="product(item.id)?.name"
          class="size-14 rounded-md"
        />
        <div class="flex-1">
          <p class="text-theme-dark-grayish-blue text-sm">{{ product(item.id)?.name }}</p>
          <div class="flex items-center gap-2 text-sm">
            <span class="text-theme-grayish-blue">{{ discountPrice(item) }}</span>
            <span class="text-theme-grayish-blue">x</span>
            <span class="text-theme-grayish-blue">{{ item.quantity }}</span>
            <span class="text-theme-very-dark-blue ml-2 font-bold">{{ totalPrice(item) }}</span>
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

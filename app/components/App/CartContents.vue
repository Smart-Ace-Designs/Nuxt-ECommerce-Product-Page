<script setup lang="ts">
import productDetails from "@@/data/products.json";

const cartContents = useState<CartItem[]>("cartContents");
const cartCounter = useState<number>("cartCounter");
const emptyCart = () => {
  cartContents.value = [];
  cartCounter.value = 0;
  emit("close");
};

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

const emit = defineEmits(["close"]);
</script>

<template>
  <div class="w-[360px] rounded-xl bg-white pb-8 pt-4 shadow-xl">
    <h2 class="text-theme-very-dark-blue mb-7 px-6 font-bold">Cart</h2>
    <hr class="border-theme-grayish-blue/30 mb-6" />
    <div
      v-if="cartContents.length === 0"
      class="text-theme-dark-grayish-blue px-6 py-16 text-center font-semibold"
    >
      Your cart is empty.
    </div>
    <div v-else class="flex flex-col gap-6 px-5">
      <div class="flex items-center gap-4" v-for="item in cartContents" :key="item.id">
        <img
          :src="product(item.id)?.images[0]?.thumbnail"
          :alt="product(item.id)?.name"
          class="size-13 rounded-md"
        />
        <div class="flex-1">
          <p class="text-theme-dark-grayish-blue">{{ product(item.id)?.name }}</p>
          <div class="text-theme-grayish-blue flex items-center gap-1">
            <span class="text-theme-dark-grayish-blue">${{ discountPrice(item) }}</span>
            <span class="text-theme-dark-grayish-blue">x</span>
            <span class="text-theme-dark-grayish-blue">{{ item.quantity }}</span>
            <span class="text-theme-very-dark-blue ml-2 font-bold">${{ totalPrice(item) }}</span>
          </div>
        </div>
        <button class="p-1 transition hover:opacity-70" @click="emptyCart">
          <img src="/icon-delete.svg" alt="Remove from cart" />
        </button>
      </div>
      <button
        class="bg-theme-orange text-shadow-theme-very-dark-blue w-full rounded-lg py-4 font-bold transition hover:bg-orange-400"
        @click="emptyCart"
      >
        Checkout
      </button>
    </div>
  </div>
</template>

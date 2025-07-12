<script setup lang="ts">
const navItems = [
  { label: "Collections", href: "/" },
  { label: "Men", href: "/" },
  { label: "Women", href: "/" },
  { label: "About", href: "/" },
  { label: "Contact", href: "/" },
];

const cartCounter = useState<number>("cartCounter");
const showCart = ref(false);
const showMobileMenu = ref(false);

function toggleCart() {
  showCart.value = !showCart.value;
}

function toggleMobileMenu() {
  showMobileMenu.value = !showMobileMenu.value;
}
</script>

<template>
  <header
    role="banner"
    class="border-theme-grayish-blue/30 relative flex items-center justify-between px-8 py-4 md:border-b md:px-0 md:py-7"
  >
    <div class="flex items-center gap-14">
      <button
        aria-label="Open menu"
        :aria-expanded="showMobileMenu"
        aria-controls="mobile-menu"
        class="md:hidden"
        @click="toggleMobileMenu"
      >
        <img src="/icon-menu.svg" alt="Menu" class="size-4" />
      </button>
      <img src="/logo.svg" alt="Sneakers Logo" class="h-5" aria-label="Sneakers Logo" />
      <nav class="hidden md:block" role="navigation">
        <ul class="text-theme-dark-grayish-blue flex items-center gap-8">
          <li v-for="item in navItems" :key="item.label" class="group relative cursor-pointer">
            <NuxtLink
              :to="item.href"
              class="text-theme-dark-grayish-blue text-md group-hover:text-theme-orange font-medium transition-colors duration-300 ease-in-out"
            >
              {{ item.label }}
            </NuxtLink>
            <span
              class="bg-theme-orange absolute left-0 right-0 top-[calc(100%+42px)] h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            ></span>
          </li>
        </ul>
      </nav>
    </div>
    <div class="relative flex items-center gap-10">
      <button
        aria-label="View cart"
        aria-haspopup="true"
        :aria-expanded="showCart"
        aria-controls="cart-panel"
        class="relative cursor-pointer"
        @click="toggleCart"
      >
        <img src="/icon-cart.svg" alt="Cart" />
        <span
          v-if="cartCounter > 0"
          class="bg-theme-orange absolute -right-2 -top-2 rounded-full px-2 text-[10px] text-white"
        >
          {{ cartCounter }}
        </span>
      </button>
      <img
        src="/image-avatar.png"
        alt="User avatar"
        class="hover:border-theme-orange md:hover:border-theme-orange size-7 cursor-pointer rounded-full border-2 border-transparent transition-all duration-200 hover:scale-105 md:size-14 md:hover:scale-110"
      />
      <div
        v-if="showCart"
        class="absolute -right-20 top-[calc(100%+10px)]"
        id="cart-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
      >
        <AppCartContents @close="toggleCart" />
      </div>
      <div
        v-if="showMobileMenu"
        class="fixed inset-0 bg-black/70"
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <AppMobileMenu @close="toggleMobileMenu" />
      </div>
    </div>
  </header>
</template>

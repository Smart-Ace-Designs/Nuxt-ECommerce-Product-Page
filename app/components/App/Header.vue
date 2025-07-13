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
    class="sm:border-theme-grayish-blue/30 mx-auto flex max-w-5xl items-center justify-between p-6 sm:mb-12 sm:border-b lg:px-0"
  >
    <div class="flex gap-6 md:gap-14">
      <button
        aria-label="Open menu"
        :aria-expanded="showMobileMenu"
        aria-controls="mobile-menu"
        class="sm:hidden"
        @click="toggleMobileMenu"
      >
        <img src="/icon-menu.svg" alt="Menu" />
      </button>
      <img src="/logo.svg" alt="Sneakers Logo" aria-label="Sneakers Logo" class="h-5" />
      <nav role="navigation">
        <ul class="text-theme-dark-grayish-blue hidden gap-3 sm:flex md:gap-8">
          <li
            v-for="item in navItems"
            :key="item.label"
            class="md:text-md group relative cursor-pointer text-sm"
          >
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
    <div class="relative flex items-center gap-4 lg:gap-14">
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
        class="hover:border-theme-orange transition-color size-6 cursor-pointer rounded-full border-2 border-transparent duration-300 md:size-14"
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

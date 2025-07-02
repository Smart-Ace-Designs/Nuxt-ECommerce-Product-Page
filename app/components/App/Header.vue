<script setup lang="ts">
const navItems = [
  { label: "Collections", href: "/" },
  { label: "Men", href: "/" },
  { label: "Women", href: "/" },
  { label: "About", href: "/" },
  { label: "Contact", href: "/" },
];

const cartCounter = useState<number>("cartCounter");
</script>

<template>
  <header
    class="border-theme-grayish-blue/30 flex items-center justify-between py-4 md:border-b md:py-7"
  >
    <div class="flex items-center gap-14">
      <button aria-label="Open menu" class="md:hidden">
        <img src="/icon-menu.svg" alt="Menu" class="size-4" />
      </button>
      <img src="/logo.svg" alt="Sneakers Logo" class="h-5" />
      <nav class="hidden md:block">
        <ul class="text-theme-dark-grayish-blue flex items-center gap-8">
          <li v-for="item in navItems">
            <NuxtLink :to="item.href" class="text-theme-dark-grayish-blue text-md font-medium">
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="flex items-center gap-10">
      <button aria-label="View cart" class="relative">
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
        class="hover:border-theme-orange size-7 rounded-full border-2 border-transparent md:size-14"
      />
    </div>
  </header>
</template>

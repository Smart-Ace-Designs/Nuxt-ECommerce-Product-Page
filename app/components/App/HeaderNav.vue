<script lang="ts" setup>
import navItems from "@@/data/navitems.json";
</script>

<template>
  <nav>
    <ul class="text-theme-dark-grayish-blue hidden gap-3 sm:flex md:gap-8">
      <li
        v-for="item in navItems"
        :key="item.label"
        class="md:text-md group relative cursor-pointer text-sm"
      >
        <NuxtLink
          :to="item.href"
          class="text-theme-dark-grayish-blue text-md group-hover:text-theme-orange font-medium transition-colors duration-300 ease-in-out"
          :aria-current="useRoute().path === item.href ? 'page' : undefined"
        >
          {{ item.label }}
        </NuxtLink>
        <span
          class="bg-theme-orange absolute left-0 right-0 top-[calc(100%+20px)] h-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:top-[calc(100%+35px)]"
        ></span>
      </li>
    </ul>
  </nav>
</template>

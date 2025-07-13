<script setup lang="ts">
defineProps<{
  imageList: Image[];
}>();

const selectedImage = ref<number>(1);
const isOpen = ref<boolean>(false);
</script>

<template>
  <div class="grid sm:gap-3 md:gap-5 lg:gap-7">
    <div class="relative mb-6 sm:mb-0">
      <img
        @click="isOpen = true"
        :src="`/image-product-${selectedImage}.jpg`"
        :alt="`Fall limited edition sneakers - image ${selectedImage}`"
        class="h-[300px] w-full object-cover sm:rounded-2xl lg:h-[445px]"
      />
      <button
        class="absolute left-4 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 sm:hidden"
      >
        <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 18">
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            stroke-width="4"
            fill="none"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
      <button
        class="absolute right-4 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 sm:hidden"
      >
        <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 18">
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            stroke-width="4"
            fill="none"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <div class="hidden gap-7 sm:grid sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="image in imageList"
        :key="image.id"
        :class="[
          selectedImage === image.id ? 'border-theme-orange rounded-xl border-2' : '',
          'md:size-30 cursor-pointer sm:mx-auto sm:size-24 lg:size-24',
        ]"
      >
        <img
          :src="image.thumbnail"
          :alt="image.alt"
          :class="[
            selectedImage === image.id ? 'rounded opacity-30' : 'rounded-xl hover:opacity-30',
            'w-full object-contain transition-opacity duration-200',
          ]"
          @click="selectedImage = image.id"
        />
      </div>
    </div>
  </div>

  <div v-if="isOpen" class="fixed inset-0 bg-black/70">
    <AppLightbox @close="isOpen = false" :image-list="imageList" :initial-image="selectedImage" />
  </div>
</template>

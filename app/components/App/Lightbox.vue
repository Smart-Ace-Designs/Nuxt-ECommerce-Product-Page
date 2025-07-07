<script setup lang="ts">
interface Image {
  id: number;
  src: string;
  thumbnail: string;
  alt: string;
}

defineProps<{
  imageList?: Image[];
}>();

defineEmits(["close"]);

const selectedImage = ref<number>(1);
</script>

<template>
  <div class="flex h-screen flex-col items-center justify-center gap-10">
    <div class="relative">
      <svg
        class="text-theme-white hover:text-theme-orange absolute -top-12 right-0 size-6 cursor-pointer fill-current transition-colors delay-200"
        @click="$emit('close')"
        role="button"
        aria-label="Close gallery"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 15"
      >
        <path
          d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
          fill-rule="evenodd"
        />
      </svg>
      <img
        :src="`/image-product-${selectedImage}.jpg`"
        :alt="`Fall limited edition sneakers - image ${selectedImage}`"
        class="size-128 rounded-2xl object-cover"
      />

      <button
        class="hover:text-theme-orange absolute -right-6 top-1/2 flex size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition-colors delay-200"
        @click="selectedImage = selectedImage === 4 ? 1 : selectedImage + 1"
      >
        <svg class="size-6 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 18">
          <path d="m2 1 8 8-8 8" stroke-width="2" fill="none" fill-rule="evenodd" />
        </svg>
      </button>

      <button
        class="hover:text-theme-orange absolute -left-6 top-1/2 flex size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition-colors delay-200"
        @click="selectedImage = selectedImage === 1 ? 4 : selectedImage - 1"
      >
        <svg class="size-6 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 18">
          <path d="M11 1 3 9l8 8" stroke-width="2" fill="none" fill-rule="evenodd" />
        </svg>
      </button>
    </div>
    <div class="grid grid-cols-4 gap-6 px-8">
      <div v-for="image in imageList" :key="image.id" class="cursor-pointer">
        <div
          class="relative size-20 overflow-hidden rounded-xl"
          :class="selectedImage === image.id ? 'border-theme-orange border-2' : ''"
          @click="selectedImage = image.id"
        >
          <img
            :src="image.thumbnail"
            :alt="image.alt"
            class="h-full w-full object-cover transition-opacity duration-200"
          />
          <div v-if="selectedImage === image.id" class="absolute inset-0 bg-black/40"></div>
        </div>
      </div>
    </div>
  </div>
</template>

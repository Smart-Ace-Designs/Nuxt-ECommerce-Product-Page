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

const selectedImage = ref<number>(1);
</script>

<template>
  <div class="relative grid place-items-center justify-center gap-6">
    <img src="/icon-close.svg" alt="Close" class="absolute right-0 top-0 cursor-pointer" />
    <img
      :src="`/image-product-${selectedImage}.jpg`"
      :alt="`Fall limited edition sneakers - image ${selectedImage}`"
      class="h-full w-full rounded-2xl object-cover"
    />
    <div class="grid grid-cols-4 gap-6 px-10">
      <div
        v-for="image in imageList"
        :key="image.id"
        :class="[
          selectedImage === image.id ? 'border-theme-orange rounded-xl border-2' : '',
          'cursor-pointer',
        ]"
      >
        <img
          :src="image.thumbnail"
          :alt="image.alt"
          :class="[
            selectedImage === image.id ? 'rounded opacity-30' : 'rounded-xl hover:opacity-30',
            'transition-opacity duration-200',
          ]"
          @click="selectedImage = image.id"
        />
      </div>
    </div>
  </div>
</template>

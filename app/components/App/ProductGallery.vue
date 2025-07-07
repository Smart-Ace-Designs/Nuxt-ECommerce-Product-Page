<script setup lang="ts">
interface Image {
  id: number;
  src: string;
  thumbnail: string;
  alt: string;
}

defineProps<{
  imageList: Image[];
}>();

const selectedImage = ref<number>(1);
const isOpen = ref<boolean>(false);
</script>

<template>
  <div class="grid gap-6">
    <img
      @click="isOpen = true"
      :src="`/image-product-${selectedImage}.jpg`"
      :alt="`Fall limited edition sneakers - image ${selectedImage}`"
      class="h-full w-full cursor-pointer rounded-2xl object-cover"
    />
    <div class="grid grid-cols-4 gap-6">
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
  <div v-if="isOpen" class="fixed inset-0 bg-black/70">
    <AppLightbox @close="isOpen = false" :image-list="imageList" />
  </div>
</template>

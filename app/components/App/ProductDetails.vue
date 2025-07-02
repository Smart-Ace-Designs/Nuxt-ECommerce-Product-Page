<script setup lang="ts"></script>

<template>
  <div class="my-auto flex flex-col gap-5">
    <h2 class="text-theme-dark-grayish-blue text-sm font-semibold uppercase">Sneaker Company</h2>
    <h1 class="text-theme-very-dark-blue leading-12 text-[2.85rem] font-bold">
      Fall Limited Edition Sneakers
    </h1>
    <p class="text-theme-dark-grayish-blue">
      These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber
      outer sole, they'll withstand everything the weather can offer.
    </p>
    <div class="flex items-center gap-4">
      <span class="text-theme-very-dark-blue text-3xl font-bold">$125.00</span>
    </div>
    <p class="text-theme-dark-grayish-blue font-semibold line-through">$250.00</p>
    <div class="flex gap-4">
      <div class="bg-theme-light-grayish-blue flex items-center gap-6 rounded-lg">
        <button class="flex cursor-pointer items-center justify-center p-4">
          <img src="/icon-minus.svg" alt="" />
        </button>
        <span class="text-theme-very-dark-blue font-bold">0</span>
        <button class="flex cursor-pointer items-center justify-center p-4">
          <img src="/icon-plus.svg" alt="" />
        </button>
      </div>
      <button
        class="bg-theme-orange hover:bg-theme-orange/80 text-shadow-theme-very-dark-blue text-theme-very-dark-blue flex items-center gap-4 rounded-lg px-20 py-4 font-bold"
      >
        <svg
          class="fill-theme-very-dark-blue size-4"
          viewBox="0 0 22 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="currentColor"
            fill-rule="nonzero"
          ></path>
        </svg>
        Add to cart
      </button>
    </div>
  </div>
</template>

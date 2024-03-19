<template>
  <Swiper 
    v-if="slides"
    class="w-full max-h-screen"
    :modules="[SwiperAutoplay]"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
  >
    <SwiperSlide v-for="slide in slides" :key="slide">
      <Artwork :data="slide" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
const props = defineProps({
  slides: Array,
});
</script>

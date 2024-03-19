<template>
  <div>
  <div
    v-for="artwork in data.artworks"
    class="snap-center h-screen"
    :key="artwork"
  >
    <div>
      <Artwork :data="artwork" />
    </div>
  </div>
  </div>
</template>

<script setup>
const { t, locale } = useI18n();
const { data } = await useAsyncData("home", () =>
  queryContent(`/${locale.value}/artwork`).findOne()
);
useContentHead(data);
</script>

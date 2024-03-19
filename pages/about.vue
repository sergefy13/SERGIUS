<template>
  <div>
  <Wrapper class="pt-44 md:grid md:grid-cols-2 font-bold">
    <div v-html="data.text" class="leading-loose "></div>
    <DudeModel2 class="hidden md:block"/>
  </Wrapper>
  </div>
</template>

<script setup>
const { t, locale } = useI18n();
const { data } = await useAsyncData("home", () =>
  queryContent(`/${locale.value}/about`).findOne()
);
useContentHead(data);
</script>

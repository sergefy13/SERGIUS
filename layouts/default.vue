<template>
  <div>
    <NuxtLayout name="header"> </NuxtLayout>
    <div id="content" class="w-full text-2xl lg:text-3xl">
      <slot name="content" />
    </div>
  </div>
  <NuxtLayout name="footer-fixed">
    <MainMenu />
    <Footer />
  </NuxtLayout>
</template>

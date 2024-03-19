<template>
  <Cursor v-if="cursorOn" />
  <NuxtLoadingIndicator color="black" />
  <NuxtLayout name="default">
    <template #content>
      <NuxtPage />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
const cursorOn = ref(true)
const { t } = useI18n();
useHead({
  title: `${t("Sitename")}`,
  meta: [{ name: "description", content: `${t("Site Description")}` }],
});

// Проверка ширины экрана и установка значения nav
onMounted(() => {
  // Проверка ширины экрана и установка значения nav
  const handleResize = () => {
    const lgWidth = 1024; // Ширина для breakpoint 'lg' в Tailwind CSS
    cursorOn.value = window.innerWidth >= lgWidth;
  };

  // Вызов функции при монтировании для начальной установки значения
  handleResize();

  // Добавление слушателя событий для изменения размера окна
  window.addEventListener("resize", handleResize);

  // Удаление слушателя при размонтировании компонента
  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });
});
</script>

<template>
  <div class="w-full h-1/6 flex flex-row items-center">
    <LogoMob v-if="mob" class="h-24" />
    <Logo v-else class="h-24" />
  </div>
</template>

<script setup>
const mob = ref(false);
onMounted(() => {
  // Проверка ширины экрана и установка значения nav
  const handleResize = () => {
    const lgWidth = 1024; // Ширина для breakpoint 'lg' в Tailwind CSS
    mob.value = window.innerWidth >= lgWidth;
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

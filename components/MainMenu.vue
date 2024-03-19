<template>
  <div class="flex flex-col gap-5 relative">
    <Navigation @click="nav = false"
      :Navigation="navigationB"
      class="absolute transition-all origin-bottom bottom-20"
      :nav="nav"
    />
    <Icon
      :name="
        nav
          ? 'ic:round-playlist-add-check-circle'
          : 'material-symbols:playlist-add-circle-rounded'
      "
      class="navigation hover:scale-110 transition-all"
      size="4em"
      @click="showNav()"
    />
  </div>
</template>
<script setup>
const nav = ref(false);

const showNav = () => {
  nav.value = !nav.value;
};

const navigationA = [];
const navigationB = [
  {
    Label: "Artwork",
    Link: "/artwork",
    Color: "hover:text-red-500",
  },
  {
    Label: "About",
    Link: "/about",
    Color: "hover:text-yellow-300",
  }
];

onMounted(() => {
  // Проверка ширины экрана и установка значения nav
  const handleResize = () => {
    const lgWidth = 1024; // Ширина для breakpoint 'lg' в Tailwind CSS
    nav.value = window.innerWidth >= lgWidth;
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

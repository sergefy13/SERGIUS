<template>
  <NuxtLink to="/" aria-label="Sergius">
   <NuxtImg src="/img/logo.png" class="p-2 h-24 w-auto hover:scale-110 transition-all"/>
  </NuxtLink>
</template>

<script setup>
import { ref } from "vue";

const Color = ref("#000");

let colorInterval = null; // Идентификатор интервала

const mode = ref(false);

const cls1 = [
  "M23.14,11.36c-3.56-2.47-7.12-4.93-10.68-7.4",
  "M16.84,23.41c-4.29-2.28-8.58-4.57-12.88-6.85",
  "M70.54,13.55c2.28-2.74,4.57-5.48,6.85-8.22",
  "M78.26,23.83c2.97-2.56,5.94-5.13,8.9-7.69",
  "M19.03,70.26c-3.47,1.55-6.94,3.1-10.41,4.66",
  "M25.6,79.03c-2.83,2.56-5.66,5.11-8.49,7.67",
  "M77.52,70.95c4.29.91,8.58,1.83,12.88,2.74",
  "M72.04,79.44c3.2,2.56,6.39,5.11,9.59,7.67",
];

const cls2 =
  "M58.28,25.03c-1.51-.4-3.76-.87-6.52-.96-3.77-.12-6.75-.21-9.39,1.73-.36.26-3.78,2.86-3.83,6.9-.05,3.9,3.05,7.14,5.75,8.63,4.26,2.34,7.49.31,11.49,3.47,1.39,1.1,2.19,2.29,2.57,2.87.74,1.12,3.3,4.95,1.98,8.9-1.02,3.05-3.64,4.52-5.31,5.46-3.2,1.8-6.23,1.86-8.63,1.92-1.95.04-5.02-.12-8.63-1.34";

const rainbowColors = [
  "#ff2424",
  "#f67e31",
  "#ffd632",
  "#49cc59",
  "#86ccff",
  "#006aff",
  "#9400D3",
];
let currentColorIndex = 0; // Текущий индекс в массиве цветов

const onMouseOver = () => {
  mode.value = true;
  document.body.classList.add("hovered");
  colorInterval = setInterval(() => {
    Color.value = rainbowColors[currentColorIndex]; // Обновление цвета
    currentColorIndex = (currentColorIndex + 1) % rainbowColors.length; // Переход к следующему цвету
  }, 200); // Периодичность изменения цветов - каждую секунду
};

const onMouseOut = () => {
  mode.value = false;
  document.body.classList.remove("hovered");
  clearInterval(colorInterval); // Остановка изменения цветов
  Color.value = "#000"; // Возврат к исходному цвету
  currentColorIndex = 0; // Сброс индекса цвета
};
</script>

<style scoped>
svg > g {
  transform: translate(13%, 13%);
}

.cls-1 {
  stroke-width: 7.92px;
}

.cls-1,
.cls-2 {
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.cls-2 {
  stroke-width: 8.14px;
}
</style>

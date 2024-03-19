<template>
  <div
    ref="Dude"
    class="navigation transition-all duration-1000 relative w-[400px] md:w-[500px] lg:w-[800px] flex justify-center items-center h-[50vh] lg:h-[700px] [&>div]:w-full lg:[&>div]:w-[700px] [&>div]:absolute [&>div]:left-0 [&>div]:top-0 &>img]:max-w-max"
  >
  <div ref="DudeBody" class="z-30 [&>img]:absolute">
  <NuxtImg class="z-30" src="/img/dude/model1/Body.png" />
  <NuxtImg class="z-20" src="/img/dude/model1/Shadow.png" :style="{ transform: `translate(${dudeShadowX}px, ${dudeShadowY}px)` }"/>
</div>
    <div
      ref="DudeFace"
      class="z-40 [&>img]:absolute"
      :style="{ transform: `translate(${dudeFaceX}px, ${dudeFaceY}px)` }"
    >
      <NuxtImg
        ref="DudeEyes"
        :class="{ hidden: isBlinking }"
        class="z-40"
        src="/img/dude/model1/Eyes.png"
      />
      <NuxtImg ref="DudeMouth" class="z-40" src="/img/dude/model1/Mouth.png" />
    </div>
  </div>
</template><script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const dudeFaceX = ref(0);
const dudeFaceY = ref(0);
const dudeShadowX = ref(0);
const dudeShadowY = ref(0);
const isBlinking = ref(false);

function handleDeviceMotion(event) {
  const acceleration = event.accelerationIncludingGravity;
  const faceSpeedFactor = 2;
  const shadowSpeedFactor = 0.2;

  // Используйте acceleration.x и acceleration.y для расчета позиций
  // Умножаем на коэффициент скорости для более заметного эффекта
  dudeFaceX.value = acceleration.x * faceSpeedFactor;
  dudeFaceY.value = -acceleration.y * faceSpeedFactor; // Минус, т.к. ось Y инвертирована
  dudeShadowX.value = -acceleration.x * shadowSpeedFactor;
  dudeShadowY.value = acceleration.y * shadowSpeedFactor;
}
function updateDudePositions(event) {
  const faceSpeedFactor = 0.02;
  dudeFaceX.value = (event.clientX - window.innerWidth / 2) * faceSpeedFactor;
  dudeFaceY.value = (event.clientY - window.innerHeight / 2) * faceSpeedFactor;

  const shadowSpeedFactor = 0.002; // Smaller speed factor for shadow
  dudeShadowX.value = -(event.clientX - window.innerWidth / 2) * shadowSpeedFactor;
  dudeShadowY.value = -(event.clientY - window.innerHeight / 2) * shadowSpeedFactor;
}
const toggleBlink = () => {
  isBlinking.value = true;
  setTimeout(() => {
    isBlinking.value = false;
  }, 150);
};

onMounted(() => {
  setInterval(toggleBlink, 4000); // Автоматическое моргание
  window.addEventListener('mousemove', updateDudePositions);
  window.addEventListener('devicemotion', handleDeviceMotion);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updateDudePositions);
  window.removeEventListener('devicemotion', handleDeviceMotion);
});
</script>
<template>
  <div
    ref="Dude"
    class="navigation transition-all duration-1000 relative w-[400px] md:w-[500px] lg:w-[800px] flex justify-center items-center h-auto lg:h-[700px] [&>div]:w-full lg:[&>div]:w-[700px] [&>div]:absolute [&>div]:left-0 [&>div]:top-0 &>img]:max-w-max"
  >
  <div ref="DudeBody" class="z-30 [&>img]:absolute">
  <NuxtImg class="z-30" src="/img/dude/model2/Body.png" />
  <NuxtImg class="z-20" src="/img/dude/model2/Shadow.png" :style="{ transform: `translate(${dudeShadowX}px, ${dudeShadowY}px)` }"/>
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
        src="/img/dude/model2/Eyes.png"
      />
      <NuxtImg ref="DudeMouth" class="z-40" src="/img/dude/model2/Mouth.png" />
    </div>
  </div>
</template>
<script setup>
// Reactive state for DudeFace position
const dudeFaceX = ref(0);
const dudeFaceY = ref(0);
// Existing code for DudeFace...
const dudeShadowX = ref(0);
const dudeShadowY = ref(0);

function updateDudePositions(event) {
  const faceSpeedFactor = 0.02;
  dudeFaceX.value = (event.clientX - window.innerWidth / 2) * faceSpeedFactor;
  dudeFaceY.value = (event.clientY - window.innerHeight / 2) * faceSpeedFactor;

  const shadowSpeedFactor = 0.002; // Smaller speed factor for shadow
  dudeShadowX.value = -(event.clientX - window.innerWidth / 2) * shadowSpeedFactor;
  dudeShadowY.value = -(event.clientY - window.innerHeight / 2) * shadowSpeedFactor;
}

const isBlinking = ref(false);

// Function to toggle blinking
const toggleBlink = () => {
  isBlinking.value = true;
  setTimeout(() => {
    isBlinking.value = false;
  }, 150); // Adjust the timing based on the blink animation
};

// Set an interval for automatic blinkin

// Lifecycle hooks to manage event listener
onMounted(() => {
  setInterval(toggleBlink, 4000); // For blinking
  window.addEventListener("mousemove", updateDudePositions); // Updated function name
});

onUnmounted(() => {
  window.removeEventListener("mousemove", updateDudePositions); // Updated function name
  // clearInterval for blinkInterval if you store it in a variable
});
</script>

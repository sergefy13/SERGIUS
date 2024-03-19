<template>
  <div
    v-if="isTouchDevice"
    :style="`--cursorX: ${cursorX}px; --cursorY: ${cursorY}px; width: ${cursorSize}; height: ${cursorSize}; opacity: ${cursorOpacity}`"
    class="cursor"
  ></div>
</template>

<script setup>
const cursorX = ref(0);
const cursorY = ref(0);
const cursorSize = ref("30px");
const cursorOpacity = ref("1");

function updateCursor(e) {
  cursorX.value = e.clientX - 18;
  cursorY.value = e.clientY - 18;
}

function enlargeCursor() {
  cursorSize.value = "15px";
  cursorOpacity.value = "1";
}

function resetCursor() {
  cursorSize.value = "30px";
  cursorOpacity.value = "1";
}

const isTouchDevice = () => {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
};

onMounted(() => {
  // document.body.style.cursor = 'none';
  document.body.classList.add('cursored')
  window.addEventListener("mousemove", updateCursor);
  document.querySelectorAll("a, .navigation").forEach((element) => {
    element.addEventListener("mouseover", enlargeCursor);
    element.addEventListener("mouseout", resetCursor);
  });
});

onUnmounted(() => {
  document.body.classList.remove('cursored')
  window.removeEventListener("mousemove", updateCursor);
  document.querySelectorAll("a, .navigation").forEach((element) => {
    element.removeEventListener("mouseover", enlargeCursor);
    element.removeEventListener("mouseout", resetCursor);
  });
});
</script>

<style scoped>
.cursor {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 50;
  border: 3px solid black;
  border-radius: 50%;
  background-color: #fbed21; /* bg-yellow-200 */
  transform: translate3d(var(--cursorX), var(--cursorY), 0);
  transition: width 0.3s ease, height 0.3s ease;
}
</style>

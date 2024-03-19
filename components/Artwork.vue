<template>
  <IntersectionObserver
    v-if="data"
    class="flex flex-col justify-center items-center h-screen max-h-screen p-4 md:p-20 gap-10 relative"
    @enter="handleEnter"
    @leave="handleLeave"
  >
    <NuxtImg
      v-if="data.mime === 'image'"
      :class="data.proportion === 'height' ? 'h-auto md:h-full w-full md:w-auto' : 'h-auto w-full lg:h-full lg:w-auto'"
      :src="`/artworks/${data.path}`"
      :alt="data.title + ', ' + data.medium + ', ' + data.year"
      placeholder
    />
    <video
      @mouseover="soundIcon = true"
      @mouseout="soundIcon = false"
      ref="videoRef"
      v-if="data.mime === 'video'"
      class="h-full md:w-auto navigation"
      :class="data.proportion === 'height' ? 'h-full md:w-auto' : 'h-auto w-full'"
      autoplay="true"
      muted
      @click="toggleMute"
    >
      <source :src="`/artworks/${data.path}`" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div
      v-if="showMuteButton"
      class="absolute transition-all flex flex-col gap-2 text-center justify-center items-center"
      :class="soundIcon ? 'opacity-100' : 'opacity-0'"
      @click="toggleMute"
    >
      <Icon name="solar:headphones-round-sound-bold-duotone" size="1.2em" />
      <p class="text-lg">press to turn sound on.</p>
    </div>
    <div class="text-center">
      <div class="text-base text-gray-500">{{ data.year }}</div>
      <div class="text-2xl">{{ data.title }}</div>
      <div class="text-xl text-gray-500">{{ data.medium }}</div>
    </div>
  </IntersectionObserver>
</template>

<script setup>
const props = defineProps({
  data: Object,
});

const soundIcon = ref(true);
const videoRef = ref(null);
const showMuteButton = ref(false);

const toggleMute = () => {
  if (!videoRef.value) return;
  if (videoRef.value.muted) {
    videoRef.value.muted = false;
  } else {
    videoRef.value.muted = true;
  }
};

let observer;
const handleEnter = () => {
  if (videoRef.value && !videoRef.value.muted) {
    videoRef.value.muted = false;
  }
};

const handleLeave = () => {
  if (videoRef.value) {
    videoRef.value.muted = true;
  }
};

onMounted(() => {
  if (!videoRef.value) return;

  // Проверяем, включен ли звук
  if (videoRef.value.muted) {
    showMuteButton.value = true;
    soundIcon.value = true;

    setTimeout(() => {
      soundIcon.value = false;
    }, 1000);
  }

  // Создаем и настраиваем observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          handleEnter();
        } else {
          handleLeave();
        }
      });
    },
    {
      threshold: 0.5, // видимость хотя бы на 50%
    }
  );

  observer.observe(videoRef.value);
});

onUnmounted(() => {
  if (observer && videoRef.value) {
    observer.unobserve(videoRef.value);
  }
});
</script>

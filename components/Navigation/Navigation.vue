<template>
  <div class="flex flex-col gap-4" v-if="Navigation">
    <div v-for="(Item, index) in Navigation" :key="Item.Label" class="h-10">
      <NuxtLink
        :to="Item.Link"
        class="text-3xl uppercase absolute transition-all duration-500"
        :class="nav ? `left-0 ${Item.Color}` : `left-[-100em] ${Item.Color}`"
        :style="{ transitionDelay: `${index * 0.1}s` }"
      >{{ $t(Item.Label) }}</NuxtLink>
    </div>
  </div>
</template>
<script setup>
const { t } = useI18n();
const props = defineProps({
  Navigation: Array,
  nav: Boolean,
});
</script>
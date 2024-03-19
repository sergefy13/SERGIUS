<template>
  <div class="flex flex-row gap-3">
    <NuxtLink
      v-for="item in SocialNetworks"
      :key="item"
      :to="item.Link"
      target="_blank"
      :aria-label="item.Label"
    >
      <Icon :name="item.Icon" class="hover:scale-110 transition-all" :class="item.Color" size="2em"/>
    </NuxtLink>
  </div>
</template>

<script setup>
const SocialNetworks = [
  {
    Link: "https://instagram.com/sergiusss13",
    Label: "Instagram",
    Icon: "ph:instagram-logo-fill",
    Color: ""
  }
];
</script>

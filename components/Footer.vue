<template>
  <div class="flex flex-row gap-4 items-center">
    <NuxtLink to="mailto:sergius.worldwide@gmail.com" aria-label="Contact Sergius">
      <Icon
        name="flowbite:mail-box-solid"
        class="navigation hover:scale-110 transition-all"
        size="2.2em"
      />
    </NuxtLink>
    <SocialNetworks />
    <div
      class="border-2 bg-white flex flex-row gap-1 items-center rounded-2xl px-3 py-1 border-black overflow-hidden"
    >
      <Icon
        name="bx:bxs-copyright"
        class="hover:scale-110 transition-all"
        size="1.3em"
      />
      2024
    </div>
  </div>
</template>

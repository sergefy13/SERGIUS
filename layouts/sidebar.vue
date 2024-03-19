<template>
  <Wrapper class="h-screen xl:w-1/6 fixed z-40 lg:sticky top-0 flex flex-col justify-between">
    <NuxtLayout name="sidebar-header" />
    <WrapperH class="h-5/6 justify-between flex-col flex">
      <slot />
    </WrapperH>
  </Wrapper>
</template>

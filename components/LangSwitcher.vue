<template>
  <div class="flex flex-col gap-2 items-center relative">
    <div
      :class="langSelector ? 'scale-100' : 'scale-0'"
      class="lang-dropdown transition-all origin-bottom absolute flex bottom-14 flex-col gap-2 items-center"
    >
      <!-- Каждая иконка в своем div для индивидуальной анимации -->
      <Icon v-for="item in locales"
        :name="`circle-flags:${item.flag}`"
        class="navigation hover:scale-110 transition-all"
        size="2em"
        @click="changeLanguage(item.code)"
      />
    </div>
    <Icon
      @click="LangDropUp"
      name="material-symbols:emoji-language-rounded"
      class="navigation hover:scale-110 transition-all"
      size="2em"
    />
  </div>
</template>

<script setup>

const { locales, setLocale } = useI18n();
const langSelector = ref(false);

const LangDropUp = () => {
  langSelector.value = !langSelector.value;
};

const changeLanguage = (code) => {
  setLocale(code);
  langSelector.value = false; // Опционально, закрывать выпадающее меню после выбора языка
};
</script>

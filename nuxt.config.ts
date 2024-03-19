// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["/assets/css/main.css"],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  modules: [
    'nuxt-swiper',
    [
      "@nuxtjs/i18n",
      {
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: "i18n_redirected",
          redirectOn: "root", // recommended
        },
        lazy: true,
        legacy: false,
        langDir: "locales",
        strategy: "prefix_except_default",
        defaultLocale: "en",
        baseUrl: "https://sergius.art",
        locales: [
          {
            code: "en",
            flag: "us",
            iso: "en-US",
            name: "English(US)",
            file: "en-US.json",
          }
        ],
      },
    ],
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/image',
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Madimi+One": { wght: 400}
        },
      },
    ],
  ]
})

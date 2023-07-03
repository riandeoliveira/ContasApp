export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "nuxt-quasar-ui",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: true,
        },
      },
    ],
  ],
});

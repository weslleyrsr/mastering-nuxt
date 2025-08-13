// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxtjs/mdc"],
  css: ["~/assets/css/main.css"],

  pages: true,
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  runtimeConfig: {
    openaiApiKey: process.env.OPENAI_API_KEY,
    public: {
      someShit: process.env.SOME_SHIT,
    },
  },

  vite: {
    optimizeDeps: {
      include: ["debug"],
    },
  },

  mdc: {
    highlight: {
      theme: "material-theme-palenight",
      langs: ["html", "markdown", "vue", "typescript", "javascript"],
    },
  },
});

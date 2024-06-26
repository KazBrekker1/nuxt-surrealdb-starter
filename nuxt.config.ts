// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@sidebase/nuxt-auth"],
  auth: {
    provider: {
      type: "authjs",
    },
    globalAppMiddleware: true,
  },
  experimental: {
    viewTransition: true,
  },
});

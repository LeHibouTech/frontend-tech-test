// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { 
    enabled: true 
  },
  modules: [
    "@nuxtjs/tailwindcss", 
    "@nuxt/eslint"
  ],
  eslint: {
    config: {
      stylistic: {
        indent: 'tab',
        semi: true,
        quotes: 'single',
      }
    }
  }
})
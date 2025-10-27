// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  colorMode: {
    preference: 'system', 
    fallback: 'light',    
    storageKey: 'nuxt-color-mode',
    classSuffix: '',
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content'
  ],
  css: ['~/assets/css/main.css']
})
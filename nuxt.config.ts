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
  css: ['~/assets/css/main.css'],
  app: {
      head: {
        title: 'TrackIt | Task & Project Tracking App',

  
        meta: [
          // SEO & accessibility
          {
            name: 'description',
            content:
              'TrackIt is a modern web app that helps you organize and track tasks and projects efficiently.',
          },
          {
            name: 'keywords',
            content: 'trackit, task management, project tracking, productivity app',
          },
          { name: 'author', content: 'TrackIt Team' },
  
          // Mobile & web app optimization
          { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
          { name: 'theme-color', content: '#1E40AF' },
        ],
  
        link: [
          { rel: 'icon', type: 'image/svg+xml', href: '/logo_1.svg' },
        ],
      },
    },
})
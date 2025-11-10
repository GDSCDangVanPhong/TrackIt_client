<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
<script setup lang="ts">
useHead({
  title: 'TrackIt | Task & Project Tracking App',
  titleTemplate: (title) => title ? `${title} - TrackIt` : 'TrackIt',
  meta: [
    // SEO & accessibility
    { name: 'description', content: 'TrackIt is a modern web app that helps you organize and track tasks and projects efficiently.' },
    { name: 'keywords', content: 'trackit, task management, project tracking, productivity app' },
    { name: 'author', content: 'TrackIt Team' },

    // Mobile & web app optimization
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'theme-color', content: '#1E40AF' },

    // Open Graph (for Facebook, LinkedIn)
    { property: 'og:title', content: 'TrackIt | Task & Project Tracking App' },
    { property: 'og:description', content: 'Easily manage and monitor all your projects in one place with TrackIt.' },
    { property: 'og:image', content: '/og-image.jpg' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://trackit.com' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'TrackIt | Task & Project Tracking App' },
    { name: 'twitter:description', content: 'Organize and track your projects efficiently with TrackIt.' },
    { name: 'twitter:image', content: '/og-image.jpg' }
  ],
  link: [
    // Favicon
    { rel: 'icon', type: 'image/svg+xml', href: '/logo_1.svg' },

    // Preconnect & preload optimization
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    
  ]
})

</script>
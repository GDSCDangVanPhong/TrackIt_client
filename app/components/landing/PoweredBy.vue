<template>
  <UPageSection
    title="Built with Modern Web Technologies"
    description="Experience a seamless, modern interface crafted with advanced web technologies. Notable of which are:"
    orientation="horizontal"
    :features="features"
  >
    <CommonsAnimateGrid :cards="cards">
      <template #logo="{ logo }">
        <img :src="logo" alt="tech logo" class="w-12 h-12 mx-auto object-contain" >
      </template>
    </CommonsAnimateGrid>
  </UPageSection>
</template>

<script setup lang="ts">
import type { PageFeatureProps } from '@nuxt/ui'
const cards = [
  { logo: '/nuxt.svg' },
  { logo: '/nestjs.svg' },
  { logo: '/postgresql.svg' },
  { logo: '/vue.svg' },
  { logo: '/tailwind.svg' },
  { logo: '/cloudflare.svg' },
  { logo: '/prisma.svg' },
  { logo: '/typescript.svg' },
  { logo: '/vercel.svg' },
  { logo: '/nodejs.svg' },
  
]



const features = reactive<PageFeatureProps[]>([
  {
    title: 'Nuxt',
    description: 'A progressive JavaScript framework for building user interfaces.',
    icon: 'material-icon-theme:nuxt',
  },
  {
    title: 'Nestjs',
    description: 'A progressive Node.js framework for building efficient, reliable and scalable server-side applications.',
    icon: 'devicon:nestjs',
  },
  {
    title: 'PostgresSQL',
    description: 'A powerful, open source object-relational database system',
    icon: 'devicon:postgresql',
  },
])
</script>

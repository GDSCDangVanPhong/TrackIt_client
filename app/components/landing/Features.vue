<template>
    <UPageSection
    title="Everything you need to ship - Faster than ever"
    description="Build without limits. Focus on what matters — your product. We handle the rest."
    >
        <UPageGrid>
            <UPageCard
            v-for="item in items"
            :key="item.title"
            variant="subtle"
            :spotlight="true"
            :title="item.title"
            :description="item.description"
            :icon="item.icon"
            />
        </UPageGrid>
    </UPageSection>
    
</template>
<script setup lang="ts">
import type { PageCardProps } from '@nuxt/ui';

const items: PageCardProps[] = [
  {
    title:'Unified Design System',
    description:'Consistent, scalable, and elegant UI foundations built on Tailwind. Customize themes effortlessly and stay on-brand.',
    icon:'lucide:palette'
  },
  {
    title:'Powerful API',
    description:'Build without limits. Focus on what matters — your product. We handle the rest.',
    icon:'lucide:zap'
  },
  {
    title:'Secure by Design',
    description:'Built-in authentication patterns, input validation, and production-ready best practices that keep your app safe.',
    icon:'lucide:lock'
  },
  {
    title:'Developer-Centric Workflow',
    description:'Auto-imports, hot module reload, and zero-config integrations. Code less, ship more.',
    icon:'lucide:code'
  },
  {
    title:'Accessible & Inclusive',
    description:'WCAG-compliant components that work beautifully for everyone — on every device, anywhere.',
    icon:'lucide:accessibility'
  },
  {
    title:'Infinitely Customizable',
    description:'Adjust anything: UI props, global configs, or Tailwind classes. Your design, your rules.',
    icon:'lucide:settings'
  }
]
</script>
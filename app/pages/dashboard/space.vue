<template>
<UDashboardPanel
id="space"
>
    <template #header>
      <UDashboardNavbar  :ui="{ right: 'gap-3' }">
        <template #leading>
          <UDashboardSidebarCollapse class="cursor-pointer"/>
        </template>
        <template #trailing >
            <UBreadcrumb :items="items" />
        </template>
      </UDashboardNavbar>
      <UDashboardNavbar>
          <template #leading>
           <UNavigationMenu     
           highlight
           highlight-color="primary" color="neutral" :items="navItems" class="w-full" />
          </template>
         
      </UDashboardNavbar>
    </template>
</UDashboardPanel>
</template>
<script setup lang="ts">
import type { BreadcrumbItem, NavigationMenuItem } from '@nuxt/ui';

definePageMeta({
  layout: 'dashboard',
})
const items = ref<BreadcrumbItem[]>([
  {
    label: 'Docs',
    icon: 'i-lucide-book-open',
    to: '/docs'
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    to: '/docs/components'
  },
  {
    label: 'Breadcrumb',
    icon: 'i-lucide-link',
    to: '/docs/components/breadcrumb'
  }
])

const navItems = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Overview',
      icon: 'i-lucide-book-open',
      to: '/docs/getting-started'
    },
    {
      label: 'Getting Started',
      icon: 'i-lucide-database',
      to: '/docs/composables'
    },
    {
      label: 'List',
      icon: 'i-lucide-box',
      to: '/docs/components',
      active: true
    }
  ],
  [
    {
      label: 'GitHub',
      icon: 'i-simple-icons-github',
      badge: '3.8k',
      to: 'https://github.com/nuxt/ui',
      target: '_blank'
    }
  ]
])
</script>
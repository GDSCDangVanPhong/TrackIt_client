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
    <template #body>
      <UPageGrid>
          <UPageCard title="Recent">
              <div class="max-h-64 overflow-y-auto ">
                <SpaceList 
                  v-for="value in fakeListData" 
                  :key="value.title" 
                  :icon="value.icon" 
                  :title="value.title" 
                  :folder="value.folder" 
                  class="mt-1.5"
                />
              </div>
            </UPageCard>
            <UPageCard title="Documents">
              <div class="max-h-64 overflow-y-auto ">
                <SpaceList 
                  v-for="value in docs" 
                  :key="value.title" 
                  :icon="value.icon" 
                  :title="value.title" 
                  :folder="value.folder" 
                  class="mt-1.5"
                />
              </div>
            </UPageCard>
            <UPageCard title="Bookmarks">
              <div class="max-h-64 overflow-y-auto ">
                <div class="flex flex-col justify-center items-center gap-y-4">
                    <Icon name="fluent:bookmark-add-20-filled" :size="56"/>
                    <span class="text-sm text-muted ">Bookmarks make it easy to save and organize important documents.</span>
                    <UButton
                      label="Create Bookmark"
                      variant="outline"
                      class="cursor-pointer"
                      size="sm"
                    />
                </div>
              </div>
            </UPageCard>
      </UPageGrid>
      <UPageCard title="Folders">
          <div class="h-72 overflow-y-auto">
              dsadasd
          </div>
      </UPageCard>
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

const fakeListData = [
  {
    icon: 'mdi:folder',  // Icon folder từ Material Design Icons (Iconify)
    title: 'GPPlatform Frontend',
    folder: 'in GPPlatform'
  },
  {
    icon: 'mdi:rocket-launch',  // Icon rocket cho sprint/project
    title: 'Sprint 1 (6/2-20/3)',
    folder: 'in GPPlatform Backend'
  },
  {
    icon: 'mdi:strategy',  // Icon cho planning
    title: 'Strategic Planning (OKRs)',
    folder: 'in GPPlatform'
  },
  {
    icon: 'mdi:briefcase',  // Icon cho portfolio
    title: 'Projects Portfolio',
    folder: 'in GPPlatform'
  },
  {
    icon: 'mdi:review',  // Icon cho review (tự chế, thay bằng icon phù hợp từ Iconify)
    title: 'Sprint 1 Review Club',
    folder: 'in GPPlatform'
  }
];
const docs = [
  {
    icon: 'heroicons:folder', // Icon folder từ Heroicons
    title: 'Frontend Docs',
    folder: 'in Document'
  },
  {
    icon: 'heroicons:folder', // Icon folder
    title: 'Backend Docs',
    folder: 'in Document'
  },
  {
    icon: 'heroicons:document-text', // Icon document
    title: 'Untitled',
    folder: 'in Frontend Docs'
  },
  {
    icon: 'heroicons:folder', // Icon folder
    title: 'BA Docs',
    folder: 'in Document'
  },
  {
    icon: 'heroicons:document-text', // Icon document
    title: 'Git branching and Commit naming conventions',
    folder: 'in Document'
  },
  {
    icon: 'heroicons:star', // Icon star (cho item đặc biệt)
    title: 'Team Overview',
    folder: 'in General Documents'
  },
  {
    icon: 'heroicons:folder', // Icon folder
    title: 'Document',
    folder: 'in General Documents'
  },
  {
    icon: 'heroicons:document-text', // Icon document
    title: 'Git branching and Commit naming co...',
    folder: 'in Git branching and Commit naming co...'
  }
];
</script>
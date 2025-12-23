<template>
<UDashboardPanel
id="list"
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
    <div class="flex gap-x-3 overflow-x-auto p-0.5 h-full">
    <UCard class="w-80 min-w-80" :ui="{ body: 'sm:p-1.5 sm:pt-3 flex-shrink-0' }"> 
        <template #header>
        <div class="flex items-center gap-x-1.5">
            <div class="w-2 h-2 bg-slate-600 rounded-full"></div>
            <p class="text-sm font-bold">To do</p>
        </div>
             
           </template>
           <VueDraggable
           v-model="fakeKanbanCards"
           :animation="250"
           ghost-class="ghost"
           group="tasks"
           >
           <SpaceKanbanCard 
           v-for="card in fakeKanbanCards"
           :key="card.id"
           :card="card"
           class="mb-2"
           />
           </VueDraggable>
    
    </UCard>
    <UCard class="w-80 min-w-80" :ui="{ body: 'sm:p-1.5 sm:pt-3 flex-shrink-0' }"> 
        <template #header>
        <div class="flex items-center gap-x-1.5">
            <div class="w-2 h-2 bg-slate-600 rounded-full"></div>
            <p class="text-sm font-bold">To do</p>
        </div>
             
           </template>
           <VueDraggable
           v-model="fakeKanbanCards"
           :animation="250"
           ghost-class="ghost"
           group="tasks"
           >
           <SpaceKanbanCard 
           v-for="card in fakeKanbanCards"
           :key="card.id"
           :card="card"
           class="mb-2"
           />
           </VueDraggable>
    
    </UCard>
    <UCard class="w-80 min-w-80" :ui="{ body: 'sm:p-1.5 sm:pt-3 flex-shrink-0' }"> 
        <template #header>
        <div class="flex items-center gap-x-1.5">
            <div class="w-2 h-2 bg-slate-600 rounded-full"></div>
            <p class="text-sm font-bold">To do</p>
        </div>
             
           </template>
           <VueDraggable
           v-model="fakeKanbanCards"
           :animation="250"
           >
           <SpaceKanbanCard 
           v-for="card in fakeKanbanCards"
           :key="card.id"
           :card="card"
           class="mb-2"
           />
           </VueDraggable>
    
    </UCard>
    <UCard class="w-80 min-w-80" :ui="{ body: 'sm:p-1.5 sm:pt-3 flex-shrink-0' }"> 
        <template #header>
        <div class="flex items-center gap-x-1.5">
            <div class="w-2 h-2 bg-slate-600 rounded-full"></div>
            <p class="text-sm font-bold">To do</p>
        </div>
             
           </template>
           <VueDraggable
           v-model="fakeKanbanCards"
           :animation="250"
           >
           <SpaceKanbanCard 
           v-for="card in fakeKanbanCards"
           :key="card.id"
           :card="card"
           class="mb-2"
           />
           </VueDraggable>
    
    </UCard>
    <UCard class="w-80 min-w-80" :ui="{ body: 'sm:p-1.5 sm:pt-3 flex-shrink-0' }"> 
        <template #header>
        <div class="flex items-center gap-x-1.5">
            <div class="w-2 h-2 bg-slate-600 rounded-full"></div>
            <p class="text-sm font-bold">To do</p>
        </div>
             
           </template>
           <VueDraggable
           v-model="fakeKanbanCards"
           :animation="250"
           >
           <SpaceKanbanCard 
           v-for="card in fakeKanbanCards"
           :key="card.id"
           :card="card"
           class="mb-2"
           />
           </VueDraggable>
    
    </UCard>
    <UCard class="w-80 min-w-80" :ui="{ body: 'sm:p-1.5 sm:pt-3 flex-shrink-0' }"> 
        <template #header>
        <div class="flex items-center gap-x-1.5">
            <div class="w-2 h-2 bg-slate-600 rounded-full"></div>
            <p class="text-sm font-bold">To do</p>
        </div>
             
           </template>
           <VueDraggable
           v-model="fakeKanbanCards"
           :animation="250"
           >
           <SpaceKanbanCard 
           v-for="card in fakeKanbanCards"
           :key="card.id"
           :card="card"
           class="mb-2"
           />
           </VueDraggable>
    
    </UCard>
    
    
    </div>
    </template>
</UDashboardPanel>
</template>
<script setup lang="ts">
import type { BreadcrumbItem, NavigationMenuItem } from '@nuxt/ui';
import type { KanbanCard } from '~/types/components/kanban';
import { VueDraggable, DraggableEvent } from 'vue-draggable-plus'

definePageMeta({
  layout: 'dashboard'
})
const fakeKanbanCards: KanbanCard[] = [
  {
    id: '1',
    title: 'Thiết kế giao diện dashboard mới',
    asigneeAvatar: [
      'https://i.pravatar.cc/150?img=1',
      'https://i.pravatar.cc/150?img=2',
      'https://i.pravatar.cc/150?img=3',
    ],
    priority: 'high',
    tags: ['UI/UX', 'Design'],
    deadline: new Date('2025-12-28'),
    subtaskscount: 5,
  },
  {
    id: '2',
    title: 'Tích hợp API thanh toán Stripe',
    asigneeAvatar: [
      'https://i.pravatar.cc/150?img=5',
      'https://i.pravatar.cc/150?img=6',
    ],
    priority: 'medium',
    tags: ['Backend', 'Payment'],
    deadline: new Date('2026-01-05'),
    subtaskscount: 3,
  },
  {
    id: '3',
    title: 'Fix bug login trên mobile',
    asigneeAvatar: ['https://i.pravatar.cc/150?img=8'],
    priority: 'high',
    tags: ['Bug', 'Mobile'],
    deadline: new Date('2025-12-25'),
    subtaskscount: 2,
  },
  {
    id: '4',
    title: 'Viết tài liệu API cho team frontend',
    asigneeAvatar: [
      'https://i.pravatar.cc/150?img=10',
      'https://i.pravatar.cc/150?img=11',
      'https://i.pravatar.cc/150?img=12',
      'https://i.pravatar.cc/150?img=13',
    ],
    priority: 'low',
    tags: ['Documentation'],
    deadline: new Date('2026-01-10'),
    subtaskscount: 8,
  },
  {
    id: '5',
    title: 'Tối ưu performance trang sản phẩm',
    asigneeAvatar: ['https://i.pravatar.cc/150?img=15'],
    priority: 'medium',
    tags: ['Performance', 'Frontend'],
    deadline: new Date('2025-12-30'),
    subtaskscount: 4,
  },
];
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
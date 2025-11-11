<template>
  <UHeader>
    <template #title>
      <NuxtImg src="/logo_1.svg" width="60" height="60" alt="Track It"/>
    </template>
    <template #default>
    <UNavigationMenu v-if="hasMenu" :items="items" highlight />
    </template>
    <template #right>
      <UTooltip text="Open on GitHub" >
          <UButton variant="ghost" icon="brandico:github" class="cursor-pointer" to="https://github.com/GDSCDangVanPhong/TrackIt_client" target="_blank"/>
      </UTooltip>
      <CommonsColorMode />
      <UButton
        size="md"
        label="Sign in"
        class="ml-1 cursor-pointer"
        variant="outline"
        trailing-icon="i-lucide-arrow-right"
        to="/auth"
      />  
      </template>
      
  </UHeader>
</template>
<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
defineProps({
  hasMenu: Boolean,
})
const activeTab = ref()
const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Docs",
    to:"/docs/get-started",
    
  },
  {
    label: "Features",
    to: "#features",
    onSelect: () => activeTab.value = 'features',
    active: activeTab.value === 'features'
  },
  {
    label: "Pricing",
    to: "#pricing",
    onSelect: () => activeTab.value = 'pricing',
    active: activeTab.value === 'pricing'
  },
]);
</script>

<template>

  <UDashboardGroup>
      <UDashboardSidebar collapsible resizable :ui="{ footer: 'border-t border-default' }">
          <template #header="{ collapsed }">
            <SidebarProjectIndicator
            :label="collapsed ? undefined : 'Benjamin'" 
            :block="collapsed"
            />
          </template>
      
          <template #default="{ collapsed }">
            <UButton
              :label="collapsed ? undefined : 'Search...'"
              icon="i-lucide-search"
              color="neutral"
              variant="outline"
              block
              :square="collapsed"
            >
              <template v-if="!collapsed" #trailing>
                <div class="flex items-center gap-0.5 ms-auto">
                  <UKbd value="meta" variant="subtle" />
                  <UKbd value="K" variant="subtle" />
                </div>
              </template>
            </UButton>
      
            <UNavigationMenu
              :collapsed="collapsed"
              :items="items[0]"
              orientation="vertical"
            />
      
            <UNavigationMenu
              :collapsed="collapsed"
              :items="items[1]"
              highlight
              highlight-color="primary"
              orientation="horizontal"

              class="mt-auto"
            />
          </template>
      
          <template #footer="{ collapsed }">
            <SidebarUserPopover 
              :label="collapsed ? undefined : 'Benjamin'" 
              :block="collapsed"
            />
          </template>
        </UDashboardSidebar>
        <slot/>
  </UDashboardGroup>
  
</template>
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[][] = [[{
  label: 'Home',
  icon: 'i-lucide-house',
  class: 'cursor-pointer',
  to: '/dashboard/home'
}, {
  label: 'Inbox',
  icon: 'i-lucide-inbox',
  badge: '4',
  class: 'cursor-pointer',
  to: '/dashboard/inbox'
}, {
  label: 'Space',
  icon: 'material-symbols:planet-rounded',
  class: 'cursor-pointer',
  to: '/dashboard/space'
}, {
  label: 'Settings',
  icon: 'i-lucide-settings',
  defaultOpen: false,
  children: [{
    label: 'General'
  }, {
    label: 'Members'
  }, {
    label: 'Notifications'
  }]
}],
[{
  label: 'Help & Support',
  icon: 'i-lucide-info',
  to: 'https://github.com/nuxt/ui',
  target: '_blank'
}]]
</script>



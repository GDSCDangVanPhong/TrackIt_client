<template>
<UDropdownMenu
class="cursor-pointer"
:content="{
  side: 'right',
  sideOffset: 10
}"
:open-delay="500"
:items="items"
>
    <UButton
      :avatar="{
        src: 'https://github.com/benjamincanac.png'
      }"
      :label="label"
      color="neutral"
      variant="ghost"
      class="w-full cursor-pointer" 
      :block="block"
    />
</UDropdownMenu>
</template>
<script setup lang="ts">
defineProps<{
  avatar?: string
  label?: string
  block?: boolean
}>()

const items = ref([
  [
    {
      label: 'Benjamin',
      avatar: {
        src: 'https://github.com/benjamincanac.png'
      },
      type: 'label'
    }
  ],
  [
    {
      label: 'Profile',
      icon: 'i-lucide-user',
      class: 'cursor-pointer'
    },
    {
      label: 'Billing',
      icon: 'i-lucide-credit-card',
      class: 'cursor-pointer'
    },
    {
      label: 'Settings',
      icon: 'i-lucide-cog',
      class: 'cursor-pointer'
    },
  ],
  [
    {
      label: 'Help',
      icon: 'material-symbols:help-outline-rounded',
      class: 'cursor-pointer'
    },
    {
      label: 'Theme',
      icon: 'proicons:dark-theme',
      class: 'cursor-pointer',
      children: [
        [
          {
            label: 'Light',
            icon: 'i-lucide-sun',
            class: 'cursor-pointer'
          },
          {
            label: 'Dark',
            icon: 'i-lucide-moon',
            class: 'cursor-pointer'
          }
        ],
        [
          {
            label: 'System',
            icon: 'i-lucide-circle-plus',
            class: 'cursor-pointer'
          }
        ]
      ]
    },
    {
      label: 'New team',
      icon: 'i-lucide-plus',
      kbds: ['meta', 'n']
    }
  ],
  [
    {
      label: 'Logout',
      icon: 'i-lucide-log-out',
      class: 'cursor-pointer'
    }
  ]
])
</script>
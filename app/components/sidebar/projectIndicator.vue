<template>
<UDropdownMenu
:items="items"
class="cursor-pointer"
:content="{
  side: 'right',
  sideOffset: 10
}"
:ui="{
  content: 'w-80'
}"
>   
    <template #customButtons="{ item }" >
    <div class="w-full">
        <div class="flex gap-3">
            <div class="relative group cursor-pointer  ">  
       
              <UAvatar
                src="https://i.pravatar.cc/150?u=your-user"
                alt="User Avatar"
                size="lg"  
                class="rounded-lg"
              />
          
              <div class="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity rounded-lg p">
                <UIcon 
                  name="i-lucide-pencil" 
                  class="size-6 text-white" 
                  @click.stop="router.push('/profile')" 
                />
              </div>
        
            </div>
            <div>
                <p class="text-[16px] font-medium text-start">Hello Team</p>
                <p class="-mt-0.5 text-muted text-xs">3 members - Free Plan - <NuxtLink to="/profile" class="underline">Upgrade</NuxtLink></p>
            </div>
        </div>
        <div class="flex mt-2 gap-4">
            <UButton
            label="Setting"
            class="w-full flex justify-center border/40 cursor-pointer h-7 text-muted " 
            variant="outline"
            size="sm"
            icon="i-lucide-settings"
            />
            <UButton
            label="People"
            class="w-full flex justify-center border-default cursor-pointer h-7 text-muted"
            variant="outline"
            icon="famicons:people-outline"
            />
        </div>
    </div>
    </template>
    
    <template #switchWorkspace="{ user }">
    <div class="items-start w-full">
        <p class="text-muted text-xs flex items-start">
            Switch Workspace
        </p>
        <div class=" flex w-full items-start mt-2.5 gap-3 hover:bg-elevated rounded-md cursor-pointer">
            <UAvatar
              src="https://i.pravatar.cc/150?u=your-user"
              alt="User Avatar"
              size="lg"  
              class="rounded-lg "
            />
            <div class="text-muted">
                Free plan
            </div>
        </div>
        
    </div>
    
    </template>
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
const router = useRouter()
const items = [
  [
    {
      label: 'Team Info',
      slot: 'customButtons' as const,
      class: 'bg-default'
    }
  ],
  [
    { label: 'Profile', icon: 'i-lucide-user' },
    { label: 'Billing', icon: 'i-lucide-credit-card' },
    { label: 'Settings', icon: 'i-lucide-cog' }
  ],
  [
    {
      label: 'Team Info',
      slot: 'switchWorkspace' as const,
      class: 'bg-default'
    }
  ]
]
</script>
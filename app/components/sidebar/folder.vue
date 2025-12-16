<template>

    <UPageCard :ui="{header: 'w-full'}">
        <template #header>
        <p class="text-base text-pretty font-semibold text-highlighted mb-6">Folders</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 auto-rows-[72px] ">
        <div
          v-for="item in folderList"
          :key="item.title"
          class="flex items-center p-2 rounded-md  cursor-pointer ring ring-accented h-14 hover:bg-muted"
          
        >
          <Icon :name="item.icon" class="mr-2 text-xl" :class="item.iconColor" />
          <span class="text-sm font-medium">{{ item.title }}</span>
        </div>
      </div>
        </template>
      
    </UPageCard>

</template>

<script setup>
const folderList = [
  { title: 'GPlatform Frontend', icon: 'heroicons:folder', iconColor: 'text-red-500' },
  { title: 'Review Club', icon: 'heroicons:folder', iconColor: 'text-green-500' },
  { title: 'GPlatform Backend', icon: 'heroicons:folder', iconColor: 'text-red-500' },
  // Thêm item để test grid max 5 và responsive
  { title: 'Docs Folder', icon: 'heroicons:folder', iconColor: 'text-blue-500' },
  { title: 'Assets', icon: 'heroicons:folder', iconColor: 'text-yellow-500' },
  { title: 'Images', icon: 'heroicons:folder', iconColor: 'text-purple-500' },
  { title: 'Videos', icon: 'heroicons:folder', iconColor: 'text-orange-500' },
  { title: 'Archives', icon: 'heroicons:folder', iconColor: 'text-gray-500' },
  { title: 'Projects', icon: 'heroicons:folder', iconColor: 'text-indigo-500' },

];
</script>
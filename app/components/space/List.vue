<template>
  <div class="flex items-center p-3  rounded-lg hover:bg-elevated transition-all duration-200 cursor-pointer max-h-12 ">
    <!-- Icon -->
    <span class="text-xl  mr-3">
        <Icon :name="props.icon"/>
    </span>
    
  
    <div class="flex flex-col">
      <h3 class="text-sm font-semibold ">{{ props.title }}</h3>
      <p class="text-xs ">{{ props.folder }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: string;  // Icon (ví dụ: từ @heroicons/vue hoặc vue-icons)
  title: string;              
  folder: string;             
}>();
</script>

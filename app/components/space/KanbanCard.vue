<template>
  <UCard
    :ui="{
      body: 'flex flex-col sm:p-3 cursor-pointer hover:bg-muted sm:gap-y-1'
    }"
  >
    <div>
      <p class="text-sm font-semibold">{{ props.card.title }}</p>
    </div>
    <div class="flex gap-x-2 overflow-auto mt-1.5">
      <UAvatarGroup max="2" size="sm">
        <UAvatar
          v-for="avatar in props.card.asigneeAvatar"
          :key="avatar"
          :src="avatar"
          
        />
      </UAvatarGroup>
      <UButton

        color="primary"
        size="xs"
        label="Complete"

      />
    </div>
  </UCard>
</template>
<script setup lang="ts">
import type { KanbanCard } from "~/types/components/kanban";

const props = defineProps<{
  card: KanbanCard;
}>();
</script>

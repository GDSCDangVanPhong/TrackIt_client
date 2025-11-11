<template>
  <UHeader>
    <UNavigationMenu :items="items" highlight />
  </UHeader>
</template>
<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = reactive<NavigationMenuItem[]>([
  {
    label: "Get started",
    icon: "icon-park-outline:play-two",
    to: "/docs/get-started",
  },
  {
    label: "Subcriptions",
    icon: "streamline-flex:subscription-cashflow-solid",
    to: "/docs/subscriptions",
  },
  {
    label: "Changelog",
    icon: "tabler:clock",
    to: "/docs/changelog",
  },
]);
</script>

<template>
  <div>
    <CommonsNavBar :has-menu="false" />
    <div
      class="backdrop-blur border-b sticky top-16 z-40 bg-default/75 border-default"
    >
      <div class="max-w-7xl mx-auto px-4">
        <UNavigationMenu :items="items" :highlight="true" />
      </div>
    </div>

    <slot />
    <CommonsFooter />
  </div>
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

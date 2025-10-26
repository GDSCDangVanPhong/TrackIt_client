<template>
  <UHeader>
    <template #title>
      <NuxtImg src="/logo_svg.svg" width="80" height="80" />
    </template>
    <UNavigationMenu :items="items" />
    <template #right>
      <UTooltip text="Open on GitHub">
        <NuxtLink to="/">
          <Icon name="simple-icons:github" />
        </NuxtLink>
      </UTooltip>
      <CommonsColorMode class="pl-2"/>
    </template>
  </UHeader>
</template>
<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Docs",
    to: "/",
  },
  {
    label: "Features",
    to: "/",
  },
  {
    label: "Pricing",
    to: "/",
  },
]);
</script>

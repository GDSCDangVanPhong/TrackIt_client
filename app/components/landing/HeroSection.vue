<template>
<UPageHero
  title="Work Smarter. Track Faster. Deliver Better"
  description="An intelligent workspace that adapts to your team. Automate tasks, visualize progress, and hit every deadline with ease."
  :links="links"
>
  <template #top>
    <LandingHeroBackground />
  </template>
</UPageHero>
</template>
<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";
const links = reactive<ButtonProps[]>([
  {
    label: "Get Started",
    to: "docs/get-started",
    variant: "solid",
  },
  {
    label: "Learn More",
    to: "docs/learn-more",
    variant: "subtle",
    trailingIcon: "fluent:arrow-right-12-filled",
  },
]);
</script>
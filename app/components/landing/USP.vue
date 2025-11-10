<template>
  <UPageSection
    title="Plug & Play"
    description="Everything your team needs to plan, build, and launch projects — all in one place. Say goodbye to chaos and hello to smooth collaboration."
    orientation="horizontal"
    :reverse="true"
    :features="features"
  >
    <NuxtImg 
    src="/USP.webp" 
    format="webp" 
    loading="lazy" 
    class="rounded-xl"
    alt="Track It"/>
  </UPageSection>
</template>
<script setup lang="ts">
const features = [
  {
    icon: 'solar:bolt-bold-duotone',
    title: 'Fast',
    description: 'Move from idea to execution in seconds with powerful, intuitive workflows.'
  },
  {
    icon: 'tabler:adjustments-bolt',
    title: 'Flexible',
    description: 'Customize your workspace to fit your team’s unique way of working.'
  },
  {
    icon: 'lucide:handshake',
    title: 'Collaborative',
    description: 'Chat, assign tasks, and share updates — all in one place.'
  }
];
</script>
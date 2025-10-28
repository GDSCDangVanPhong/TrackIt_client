<template>
  <div>
      <LandingHeroSection />
      <LandingPoweredBy />
      <LandingUSP />
      <LandingFeatures id="features"/>
      <LandingPricings id="pricing"/>
      <LandingTestimonial/>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'landing'
})
</script>

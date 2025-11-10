<template>
  <div>
      <LandingHeroSection />
      <LandingPoweredBy />
      <LandingUSP />
      <LazyLandingFeatures id="features"/>
      <LazyLandingPricings id="pricing"/>
      <LazyLandingTestimonial hydrate-on-visible/>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'landing'
})
</script>

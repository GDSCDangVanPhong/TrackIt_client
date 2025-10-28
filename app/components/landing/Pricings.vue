<template>
  <UPageSection 
  id="pricing" 
  title="Pricings"
  description="See what fits in well for you">
    <UPricingPlans :plans="plans" />
  </UPageSection>
</template>
<script setup lang="ts">
import type { PricingPlanProps } from "@nuxt/ui";

const plans: PricingPlanProps[] = [
  {
    title: "Hobby",
    description: "Tailored for indie hackers.",
    price: "Free",
    features: ["Up to 2 projects", "Lifetime access"],
  },
  {
    title: "Startup",
    description: "Best suited for small teams.",
    price: "$5",
    features: ["Up to 5 projects", "Everything in Solo", "AI empowered"],
    button: {
      label: "Buy now",
      class:'cursor-pointer',
      to:'/pricing'
    },
  },
  {
    title: "Organization",
    description: "Ideal for larger teams and organizations.",
    price: "$12",
    features: ["Unlimited projects", "Everything in Startup"],
    button: {
      label: "Buy now",
      class:'cursor-pointer',
      to:'/pricing'
    },
  },
];
</script>
